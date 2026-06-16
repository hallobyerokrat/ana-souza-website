'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

type Texto = { id: string; title: string; body: string }

export default function AdminTextosPage() {
  const [textos, setTextos] = useState<Texto[]>([])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [saving, setSaving] = useState(false)
  const supabase = createClient()

  async function loadTextos() {
    const { data } = await supabase.from('textos').select('*').order('sort_order')
    setTextos(data ?? [])
  }

  useEffect(() => { loadTextos() }, [])

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    await supabase.from('textos').insert({ title, body, sort_order: textos.length })
    setTitle(''); setBody('')
    await loadTextos()
    setSaving(false)
  }

  async function handleDelete(id: string) {
    if (!confirm('Apagar este texto?')) return
    await supabase.from('textos').delete().eq('id', id)
    await loadTextos()
  }

  return (
    <div>
      <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 20, color: '#3d2b35', margin: '0 0 6px' }}>Textos & Poemas</h2>
      <p style={{ color: '#9b7080', fontSize: 13, margin: '0 0 24px' }}>Adicione seus textos e poemas. Aparecem como acordeão na página Arte e Textos.</p>

      <form onSubmit={handleAdd} style={{ background: '#fff', border: '1px solid rgba(107,80,96,0.15)', borderRadius: 8, padding: 20, marginBottom: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <input placeholder="Título do texto ou poema" value={title} onChange={e => setTitle(e.target.value)} required
          style={{ padding: '10px 14px', border: '1px solid rgba(107,80,96,0.25)', borderRadius: 6, fontSize: 14 }} />
        <textarea placeholder="Escreva o texto completo aqui..." value={body} onChange={e => setBody(e.target.value)} rows={6} required
          style={{ padding: '10px 14px', border: '1px solid rgba(107,80,96,0.25)', borderRadius: 6, fontSize: 14, resize: 'vertical', fontFamily: 'inherit' }} />
        <button type="submit" disabled={saving || !title || !body}
          style={{ padding: 10, background: '#7a5468', color: '#fff', border: 'none', borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: 'pointer', alignSelf: 'flex-start' }}>
          {saving ? 'Salvando...' : '+ Adicionar texto'}
        </button>
      </form>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {textos.length === 0 && <p style={{ color: '#9b7080', fontSize: 13 }}>Nenhum texto ainda.</p>}
        {textos.map(t => (
          <div key={t.id} style={{ background: '#fff', border: '1px solid rgba(107,80,96,0.15)', borderRadius: 8, padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
            <div style={{ flex: 1 }}>
              <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: '#3d2b35', fontStyle: 'italic', fontFamily: 'var(--font-playfair)' }}>{t.title}</p>
              <p style={{ margin: '4px 0 0', fontSize: 12, color: '#9b7080', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 400 }}>
                {t.body.substring(0, 80)}…
              </p>
            </div>
            <button onClick={() => handleDelete(t.id)} style={{ background: 'none', border: '1px solid rgba(107,80,96,0.3)', borderRadius: 6, padding: '6px 12px', fontSize: 12, color: '#7a5468', cursor: 'pointer', flexShrink: 0 }}>
              Apagar
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
