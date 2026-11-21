'use client'

import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function LogoutButton() {
  const router = useRouter()

  async function handleLogout() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: 'rgba(253,248,245,0.75)', cursor: 'pointer', fontSize: 13 }}>
      Sair →
    </button>
  )
}
