'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) { setError('E-mail ou senha incorretos.'); setLoading(false); return }
    router.push('/admin/fotos')
    router.refresh()
  }

  return (
    <div style={{ minHeight: '100vh', background: '#faf6f1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-inter)' }}>
      <div style={{ background: '#fff', borderRadius: 8, padding: '40px 32px', width: 320, boxShadow: '0 4px 24px rgba(61,43,53,0.12)' }}>
        <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 22, color: '#3d2b35', margin: '0 0 24px', textAlign: 'center' }}>
          Área Administrativa
        </h1>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required
            style={{ padding: '10px 14px', border: '1px solid rgba(107,80,96,0.25)', borderRadius: 6, fontSize: 14 }} />
          <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} required
            style={{ padding: '10px 14px', border: '1px solid rgba(107,80,96,0.25)', borderRadius: 6, fontSize: 14 }} />
          {error && <p style={{ color: '#c0392b', fontSize: 13, margin: 0 }}>{error}</p>}
          <button type="submit" disabled={loading}
            style={{ padding: 11, background: '#7a5468', color: '#fff', border: 'none', borderRadius: 6, fontSize: 14, fontWeight: 600, cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1 }}>
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  )
}
