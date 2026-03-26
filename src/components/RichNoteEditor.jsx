import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import { useEffect } from 'react'

function ToolbarBtn({ onClick, active, title, children }) {
  return (
    <button
      className={`tiptap-btn${active ? ' active' : ''}`}
      onClick={onClick}
      title={title}
      type="button"
    >
      {children}
    </button>
  )
}

export default function RichNoteEditor({ value, onChange, placeholder = 'Add notes...' }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: false }),
      Placeholder.configure({ placeholder }),
    ],
    content: value || '',
    onUpdate({ editor }) {
      onChange(editor.getHTML())
    },
  })

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || '', false)
    }
  }, [value])

  if (!editor) return null

  return (
    <div className="tiptap-wrapper">
      <div className="tiptap-toolbar">
        <ToolbarBtn
          onClick={() => editor.chain().focus().toggleBold().run()}
          active={editor.isActive('bold')} title="Bold"
        ><b>B</b></ToolbarBtn>
        <ToolbarBtn
          onClick={() => editor.chain().focus().toggleItalic().run()}
          active={editor.isActive('italic')} title="Italic"
        ><i>I</i></ToolbarBtn>
        <ToolbarBtn
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          active={editor.isActive('bulletList')} title="Bullet list"
        >&#8226; List</ToolbarBtn>
        <ToolbarBtn
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          active={editor.isActive('orderedList')} title="Numbered list"
        >1. List</ToolbarBtn>
        <ToolbarBtn
          onClick={() => {
            const url = window.prompt('URL:')
            if (url) editor.chain().focus().setLink({ href: url }).run()
          }}
          active={editor.isActive('link')} title="Add link"
        >&#128279;</ToolbarBtn>
        <ToolbarBtn
          onClick={() => editor.chain().focus().unsetLink().run()}
          title="Remove link"
        >&#128279;&#x20E0;</ToolbarBtn>
      </div>
      <EditorContent editor={editor} className="tiptap-editor" />
    </div>
  )
}
