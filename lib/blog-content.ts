import type { BlogPost } from '@/types/blog'

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

/** Convert the legacy paragraph-array format or current Tiptap HTML to HTML. */
export function blogContentToHtml(content: BlogPost['content'] | undefined) {
  if (typeof content === 'string') return content

  return (content || [])
    .map((paragraph) => `<p>${escapeHtml(paragraph).replace(/\n/g, '<br />')}</p>`)
    .join('')
}
