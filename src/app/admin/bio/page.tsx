'use client'
export const dynamic = "force-dynamic";

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

const BIO_KEYS = [
  { key: 'p1', label: 'Parágrafo 1 — Apresentação' },
  { key: 'p3', label: 'Parágrafo 2 — Coletâneas' },
  { key: 'p4', label: 'Parágrafo 3 — Livros' },
  { key: 'p5', label: 'Parágrafo 4 — Frase final' },
]

type BioRow = { key: string; value_pt: string; value_de: string }

export default function AdminBioPage() {
  const [bio, setBio] = useState<Record<string, BioRow>>({})
  const [saving, setSaving] = useState<string | null>(null)
  const [saved, setSaved] = useState<string | null>(null)
  const supabase = createClient()

  useEffect(() => {
    supabase.from('bio_content').select('*').then(({ data }) => {
      if (!data) return
      const map: Record<string, BioRow> = {}
      data.forEach(row => { map[row.key] = row })
      setBio(map)
    })
  }, [])

  function update(key: string, lang: 'value_pt' | 'value_de', value: string) {
    setBio(prev => ({ ...prev, [key]: { ...prev[key], key, value_pt: prev[key]?.value_pt ?? '', value_de: prev[key]?.value_de ?? '', [lang]: value } }))
  }

  async function handleSave(key: string) {
    setSaving(key)
    await supabase.from('bio_content').upsert({ ...bio[key], updated_at: new Date().toISOString() })
    setSaving(null); setSaved(key)
    setTimeout(() => setSaved(null), 2000)
  }

  return (
    <div>
      <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 20, color: '#3d2b35', margin: '0 0 6px' }}>Biografia</h2>
      <p style={{ color: '#9b7080', fontSize: 13, margin: '0 0 24px' }}>Edite os parágrafos da sua bio em português e alemão.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {BIO_KEYS.map(({ key, label }) => (
          <div key={key} style={{ background: '#fff', border: '1px solid rgba(107,80,96,0.15)', borderRadius: 8, padding: 20 }}>
            <p style={{ margin: '0 0 12px', fontSize: 13, fontWeight: 600, color: '#3d2b35' }}>{label}</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
              <div>
                <p style={{ margin: '0 0 4px', fontSize: 11, color: '#9b7080', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Português</p>
                <textarea value={bio[key]?.value_pt ?? ''} onChange={e => update(key, 'value_pt', e.target.value)} rows={4}
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid rgba(107,80,96,0.25)', borderRadius: 6, fontSize: 13, resize: 'vertical', boxSizing: 'border-box', fontFamily: 'inherit' }} />
              </div>
              <div>
                <p style={{ margin: '0 0 4px', fontSize: 11, color: '#9b7080', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Alemão</p>
                <textarea value={bio[key]?.value_de ?? ''} onChange={e => update(key, 'value_de', e.target.value)} rows={4}
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid rgba(107,80,96,0.25)', borderRadius: 6, fontSize: 13, resize: 'vertical', boxSizing: 'border-box', fontFamily: 'inherit' }} />
              </div>
            </div>
            <button onClick={() => handleSave(key)} disabled={saving === key}
              style={{ padding: '8px 20px', background: '#7a5468', color: '#fff', border: 'none', borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
              {saving === key ? 'Salvando...' : saved === key ? '✓ Salvo' : 'Salvar'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
