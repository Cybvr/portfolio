
import { NextRequest, NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import { join } from 'path'

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData()
    const file: File | null = data.get('file') as unknown as File

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Save to public/images/portfolio
    const path = join(process.cwd(), 'public', 'images', 'portfolio', file.name)
    await writeFile(path, buffer)

    return NextResponse.json({ 
      url: `/images/portfolio/${file.name}`
    })
  } catch (error) {
    return NextResponse.json({ error: 'Error uploading file' }, { status: 500 })
  }
}
