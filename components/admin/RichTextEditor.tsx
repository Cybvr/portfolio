'use client'

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Button } from '@/components/ui/button'

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
}

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    immediatelyRender: false,
    onUpdate: ({ editor: currentEditor }) => onChange(currentEditor.getHTML()),
    editorProps: {
      attributes: {
        class: 'rich-text-editor__content',
      },
    },
  })

  if (!editor) return null

  const toggle = (command: () => boolean) => {
    command()
    editor.commands.focus()
  }

  return (
    <div className="rich-text-editor overflow-hidden rounded-2xl border border-input">
      <div className="flex flex-wrap items-center gap-1 border-b border-border bg-muted/40 p-2">
        <Button
          type="button"
          variant={editor.isActive('heading', { level: 2 }) ? 'secondary' : 'ghost'}
          size="sm"
          onClick={() => toggle(() => editor.chain().focus().toggleHeading({ level: 2 }).run())}
          aria-label="Heading"
        >
          H2
        </Button>
        <Button
          type="button"
          variant={editor.isActive('heading', { level: 3 }) ? 'secondary' : 'ghost'}
          size="sm"
          onClick={() => toggle(() => editor.chain().focus().toggleHeading({ level: 3 }).run())}
          aria-label="Subheading"
        >
          H3
        </Button>
        <span className="mx-1 h-5 w-px bg-border" aria-hidden="true" />
        <Button
          type="button"
          variant={editor.isActive('bold') ? 'secondary' : 'ghost'}
          size="sm"
          onClick={() => toggle(() => editor.chain().focus().toggleBold().run())}
          aria-label="Bold"
        >
          <strong>B</strong>
        </Button>
        <Button
          type="button"
          variant={editor.isActive('italic') ? 'secondary' : 'ghost'}
          size="sm"
          onClick={() => toggle(() => editor.chain().focus().toggleItalic().run())}
          aria-label="Italic"
        >
          <em>I</em>
        </Button>
        <span className="mx-1 h-5 w-px bg-border" aria-hidden="true" />
        <Button
          type="button"
          variant={editor.isActive('bulletList') ? 'secondary' : 'ghost'}
          size="sm"
          onClick={() => toggle(() => editor.chain().focus().toggleBulletList().run())}
          aria-label="Bullet list"
        >
          • List
        </Button>
        <Button
          type="button"
          variant={editor.isActive('orderedList') ? 'secondary' : 'ghost'}
          size="sm"
          onClick={() => toggle(() => editor.chain().focus().toggleOrderedList().run())}
          aria-label="Numbered list"
        >
          1. List
        </Button>
        <Button
          type="button"
          variant={editor.isActive('blockquote') ? 'secondary' : 'ghost'}
          size="sm"
          onClick={() => toggle(() => editor.chain().focus().toggleBlockquote().run())}
          aria-label="Quote"
        >
          Quote
        </Button>
        <span className="mx-1 h-5 w-px bg-border" aria-hidden="true" />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => toggle(() => editor.chain().focus().undo().run())}
          disabled={!editor.can().undo()}
          aria-label="Undo"
        >
          Undo
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => toggle(() => editor.chain().focus().redo().run())}
          disabled={!editor.can().redo()}
          aria-label="Redo"
        >
          Redo
        </Button>
      </div>
      <EditorContent editor={editor} />
    </div>
  )
}
