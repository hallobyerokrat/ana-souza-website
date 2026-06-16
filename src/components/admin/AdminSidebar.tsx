'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  { href: '/admin/fotos',  label: '📸 Fotos' },
  { href: '/admin/videos', label: '🎥 Vídeos' },
  { href: '/admin/textos', label: '✏️ Textos & Poemas' },
  { href: '/admin/bio',    label: '👤 Biografia' },
  { href: '/admin/livros', label: '📚 Livros' },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  return (
    <nav style={{ width: 200, background: '#f5ede8', borderRight: '1px solid rgba(107,80,96,0.15)', flexShrink: 0, paddingTop: 16 }}>
      <p style={{ fontFamily: 'var(--font-inter)', fontSize: 10, color: '#9b7080', padding: '0 16px 8px', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>
        Conteúdo
      </p>
      {NAV.map(({ href, label }) => {
        const active = pathname === href
        return (
          <Link key={href} href={href} style={{
            display: 'block', padding: '10px 16px',
            fontFamily: 'var(--font-inter)', fontSize: 13,
            color: active ? '#fff' : '#6b5060',
            background: active ? '#7a5468' : 'transparent',
            borderLeft: active ? '3px solid #3d2b35' : '3px solid transparent',
            textDecoration: 'none',
          }}>
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
