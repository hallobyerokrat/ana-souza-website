'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

const BOOKS = [
  { slug: 'ceu-de-brincar', title: 'Céu de Brincar' },
  { slug: 'casos-de-familia', title: 'Casos de Família' },
]

type BookRow = { slug: string; description_pt: string; description_de: string }

export default function AdminLivrosPage() {
  const [books, setBooks] = useState<Record<string, BookRow>>({})
  const [saving, setSaving] = useState<string | null>(null)
  const [saved, setSaved] = useState<string | null>(null)
  const supabase = createClient()

  useEffect(() => {
    supabase.from('book_descriptions').select('*').then(({ data }) => {
      if (!data) return
      const map: Record<string, BookRow> = {}
      data.forEach(row => { map[row.slug] = row })
      setBooks(map)
    })
  }, [])

  function update(slug: string, lang: 'description_pt' | 'description_de', value: string) {
    setBooks(prev => ({ ...prev, [slug]: { ...prev[slug], slug, description_pt: prev[slug]?.description_pt ?? '', description_de: prev[slug]?.description_de ?? '', [lang]: value } }))
  }

  async function handleSave(slug: string) {
    setSaving(slug)
    await supabase.from('book_descriptions').upsert({ ...books[slug], updated_at: new Date().toISOString() })
    setSaving(null); setSaved(slug)
    setTimeout(() => setSaved(null), 2000)
  }

  return (
    <div>
      <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 20, color: '#3d2b35', margin: '0 0 6px' }}>Livros</h2>
      <p style={{ color: '#9b7080', fontSize: 13, margin: '0 0 24px' }}>Edite a descrição dos seus livros em português e alemão.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {BOOKS.map(({ slug, title }) => (
          <div key={slug} style={{ background: '#fff', border: '1px solid rgba(107,80,96,0.15)', borderRadius: 8, padding: 20 }}>
            <p style={{ margin: '0 0 12px', fontSize: 14, fontWeight: 600, color: '#3d2b35', fontStyle: 'italic', fontFamily: 'var(--font-playfair)' }}>{title}</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
              <div>
                <p style={{ margin: '0 0 4px', fontSize: 11, color: '#9b7080', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Português</p>
                <textarea value={books[slug]?.description_pt ?? ''} onChange={e => update(slug, 'description_pt', e.target.value)} rows={4}
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid rgba(107,80,96,0.25)', borderRadius: 6, fontSize: 13, resize: 'vertical', boxSizing: 'border-box', fontFamily: 'inherit' }} />
              </div>
              <div>
                <p style={{ margin: '0 0 4px', fontSize: 11, color: '#9b7080', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Alemão</p>
                <textarea value={books[slug]?.description_de ?? ''} onChange={e => update(slug, 'description_de', e.target.value)} rows={4}
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid rgba(107,80,96,0.25)', borderRadius: 6, fontSize: 13, resize: 'vertical', boxSizing: 'border-box', fontFamily: 'inherit' }} />
              </div>
            </div>
            <button onClick={() => handleSave(slug)} disabled={saving === slug}
              style={{ padding: '8px 20px', background: '#7a5468', color: '#fff', border: 'none', borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
              {saving === slug ? 'Salvando...' : saved === slug ? '✓ Salvo' : 'Salvar'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
