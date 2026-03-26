import { useState, useRef } from 'react'
import { useEdit } from '../context/EditContext'

export default function InlineEdit({ value, onChange, tag: Tag = 'p', className = '', multiline = true, style }) {
  const { editMode } = useEdit()
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(value)
  const inputRef = useRef(null)

  const startEdit = () => {
    if (!editMode) return
    setDraft(value)
    setEditing(true)
    setTimeout(() => inputRef.current?.focus(), 50)
  }

  const save = () => {
    onChange(draft)
    setEditing(false)
  }

  const cancel = () => {
    setDraft(value)
    setEditing(false)
  }

  const handleKey = (e) => {
    if (e.key === 'Escape') cancel()
    if (e.key === 'Enter' && !multiline) save()
  }

  if (editing) {
    return (
      <div style={{ position: 'relative' }}>
        {multiline ? (
          <textarea
            ref={inputRef}
            value={draft}
            onChange={e => setDraft(e.target.value)}
            onKeyDown={handleKey}
            rows={4}
            style={{
              width: '100%', fontFamily: 'inherit', fontSize: 'inherit',
              lineHeight: 'inherit', color: 'inherit', background: '#fffdf0',
              border: '2px solid #4a90d9', borderRadius: 4, padding: '6px 8px',
              outline: 'none', resize: 'vertical', ...style
            }}
          />
        ) : (
          <input
            ref={inputRef}
            type="text"
            value={draft}
            onChange={e => setDraft(e.target.value)}
            onKeyDown={handleKey}
            style={{
              width: '100%', fontFamily: 'inherit', fontSize: 'inherit',
              color: 'inherit', background: '#fffdf0',
              border: '2px solid #4a90d9', borderRadius: 4, padding: '4px 8px',
              outline: 'none', ...style
            }}
          />
        )}
        <div style={{ display: 'flex', gap: 6, marginTop: 6 }}>
          <button className="inline-save-btn" onClick={save}>Save</button>
          <button className="inline-cancel-btn" onClick={cancel}>Cancel</button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
      <Tag className={className} style={style} onClick={startEdit}
        title={editMode ? 'Click to edit' : undefined}
        css={editMode ? { cursor: 'text' } : undefined}
      >
        {value}
      </Tag>
      {editMode && (
        <button
          onClick={startEdit}
          style={{
            position: 'absolute', top: 0, right: 0,
            background: '#4a90d9', color: '#fff', border: 'none',
            borderRadius: 3, padding: '2px 7px', fontSize: 10,
            fontWeight: 700, cursor: 'pointer', opacity: 0,
            transition: 'opacity .15s',
          }}
          className="edit-pencil-btn"
          onMouseEnter={e => e.currentTarget.style.opacity = 1}
          onMouseLeave={e => e.currentTarget.style.opacity = 0}
        >
          ✏ Edit
        </button>
      )}
    </div>
  )
}
