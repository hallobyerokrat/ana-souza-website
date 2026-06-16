'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

type Video = { id: string; title: string; youtube_url: string }

function youtubeId(url: string) {
  return url.match(/(?:v=|youtu\.be\/)([^&?/]+)/)?.[1] ?? null
}

export default function AdminVideosPage() {
  const [videos, setVideos] = useState<Video[]>([])
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [saving, setSaving] = useState(false)
  const supabase = createClient()

  async function loadVideos() {
    const { data } = await supabase.from('videos').select('*').order('sort_order')
    setVideos(data ?? [])
  }

  useEffect(() => { loadVideos() }, [])

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    await supabase.from('videos').insert({ title, youtube_url: url, sort_order: videos.length })
    setTitle(''); setUrl('')
    await loadVideos()
    setSaving(false)
  }

  async function handleDelete(id: string) {
    if (!confirm('Apagar este vídeo?')) return
    await supabase.from('videos').delete().eq('id', id)
    await loadVideos()
  }

  return (
    <div>
      <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 20, color: '#3d2b35', margin: '0 0 6px' }}>Vídeos</h2>
      <p style={{ color: '#9b7080', fontSize: 13, margin: '0 0 24px' }}>Adicione links do YouTube. Aparecerão na página Arte e Textos.</p>

      <form onSubmit={handleAdd} style={{ background: '#fff', border: '1px solid rgba(107,80,96,0.15)', borderRadius: 8, padding: 20, marginBottom: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <input placeholder="Título do vídeo" value={title} onChange={e => setTitle(e.target.value)} required
          style={{ padding: '10px 14px', border: '1px solid rgba(107,80,96,0.25)', borderRadius: 6, fontSize: 14 }} />
        <input placeholder="Link do YouTube (ex: https://www.youtube.com/watch?v=...)" value={url} onChange={e => setUrl(e.target.value)} required
          style={{ padding: '10px 14px', border: '1px solid rgba(107,80,96,0.25)', borderRadius: 6, fontSize: 14 }} />
        <button type="submit" disabled={saving || !title || !url}
          style={{ padding: 10, background: '#7a5468', color: '#fff', border: 'none', borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: 'pointer', alignSelf: 'flex-start' }}>
          {saving ? 'Salvando...' : '+ Adicionar vídeo'}
        </button>
      </form>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {videos.length === 0 && <p style={{ color: '#9b7080', fontSize: 13 }}>Nenhum vídeo ainda.</p>}
        {videos.map(v => {
          const vid = youtubeId(v.youtube_url)
          return (
            <div key={v.id} style={{ background: '#fff', border: '1px solid rgba(107,80,96,0.15)', borderRadius: 8, padding: 16, display: 'flex', gap: 16, alignItems: 'center' }}>
              {vid && <img src={`https://img.youtube.com/vi/${vid}/mqdefault.jpg`} alt="" style={{ width: 120, height: 68, objectFit: 'cover', borderRadius: 4, flexShrink: 0 }} />}
              <div style={{ flex: 1 }}>
                <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: '#3d2b35' }}>{v.title}</p>
                <p style={{ margin: '2px 0 0', fontSize: 12, color: '#9b7080' }}>{v.youtube_url}</p>
              </div>
              <button onClick={() => handleDelete(v.id)} style={{ background: 'none', border: '1px solid rgba(107,80,96,0.3)', borderRadius: 6, padding: '6px 12px', fontSize: 12, color: '#7a5468', cursor: 'pointer' }}>
                Apagar
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
