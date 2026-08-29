type FirestoreField = {
  stringValue?: string
  timestampValue?: string
}

type FirestoreDocument = {
  fields?: Record<string, FirestoreField>
}

export type RouteMetadataContent = {
  title?: string
  description?: string
  image?: string
}

function fieldValue(fields: Record<string, FirestoreField> | undefined, key: string) {
  return fields?.[key]?.stringValue || fields?.[key]?.timestampValue
}

export async function fetchRouteMetadata(collection: 'jpblog' | 'jpportfolio', id: string): Promise<RouteMetadataContent | null> {
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
  if (!projectId) return null

  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY
  const query = apiKey ? `?key=${encodeURIComponent(apiKey)}` : ''
  const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/${collection}/${encodeURIComponent(id)}${query}`

  try {
    const response = await fetch(url, { next: { revalidate: 60 } })
    if (!response.ok) return null

    const document = (await response.json()) as FirestoreDocument
    const fields = document.fields

    return {
      title: fieldValue(fields, 'title'),
      description: fieldValue(fields, collection === 'jpblog' ? 'excerpt' : 'description'),
      image: fieldValue(fields, collection === 'jpblog' ? 'coverImage' : 'featuredImage'),
    }
  } catch {
    return null
  }
}
