'use client'

import { useEffect, useState } from 'react'
import { CldUploadWidget } from 'next-cloudinary'
import { createClient } from '@/lib/supabase/client'

type Photo = { id: string; url: string; public_id: string }

export default function FotosClient() {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  async function loadPhotos() {
    const { data } = await supabase.from('photos').select('*').order('created_at', { ascending: false })
    setPhotos(data ?? [])
    setLoading(false)
  }

  useEffect(() => { loadPhotos() }, [])

  async function handleUploadSuccess(result: any) {
    const { secure_url, public_id } = result.info
    await supabase.from('photos').insert({ url: secure_url, public_id })
    await loadPhotos()
  }

  async function handleDelete(photo: Photo) {
    if (!confirm('Apagar esta foto?')) return
    await fetch('/api/cloudinary/delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ public_id: photo.public_id }),
    })
    await supabase.from('photos').delete().eq('id', photo.id)
    await loadPhotos()
  }

  return (
    <div>
      <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 20, color: '#3d2b35', margin: '0 0 6px' }}>Fotos</h2>
      <p style={{ color: '#9b7080', fontSize: 13, margin: '0 0 24px' }}>As fotos aparecem na página Arte e Textos.</p>

      <CldUploadWidget
        uploadPreset="ana_souza_signed"
        signatureEndpoint="/api/cloudinary/sign"
        onSuccess={handleUploadSuccess}
        options={{ multiple: true, maxFiles: 10, resourceType: 'image' }}
      >
        {({ open }) => (
          <div onClick={() => open()} style={{ border: '2px dashed rgba(107,80,96,0.3)', borderRadius: 8, padding: '32px 24px', textAlign: 'center', background: '#fdf8f5', cursor: 'pointer', marginBottom: 24 }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>📁</div>
            <p style={{ color: '#6b5060', fontWeight: 600, margin: 0, fontSize: 14 }}>Clique para fazer upload de fotos</p>
            <p style={{ color: '#9b7080', margin: '4px 0 0', fontSize: 12 }}>JPG, PNG — máx. 10MB por foto</p>
          </div>
        )}
      </CldUploadWidget>

      {loading ? (
        <p style={{ color: '#9b7080', fontSize: 13 }}>Carregando...</p>
      ) : photos.length === 0 ? (
        <p style={{ color: '#9b7080', fontSize: 13 }}>Nenhuma foto ainda.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 12 }}>
          {photos.map(photo => (
            <div key={photo.id} style={{ position: 'relative', borderRadius: 6, overflow: 'hidden' }}>
              <img src={photo.url} alt="" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', display: 'block' }} />
              <button onClick={() => handleDelete(photo)} style={{ position: 'absolute', top: 6, right: 6, background: 'rgba(122,84,104,0.85)', color: '#fff', border: 'none', borderRadius: '50%', width: 24, height: 24, cursor: 'pointer', fontSize: 14 }}>×</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
