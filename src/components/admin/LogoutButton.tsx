'use client'

import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function LogoutButton() {
  const router = useRouter()
  const supabase = createClient()

  async function handleLogout() {
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
