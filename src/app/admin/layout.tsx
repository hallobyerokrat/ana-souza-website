import AdminSidebar from '@/components/admin/AdminSidebar'
import LogoutButton from '@/components/admin/LogoutButton'

export const dynamic = "force-dynamic"
export const metadata = { robots: 'noindex, nofollow' }

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#faf6f1', fontFamily: 'var(--font-inter)' }}>
      <AdminSidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <header style={{ background: '#7a5468', color: '#fdf8f5', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13 }}>
          <span style={{ fontWeight: 600 }}>Ana Souza — Área Administrativa</span>
          <LogoutButton />
        </header>
        <main style={{ flex: 1, padding: 32 }}>{children}</main>
      </div>
    </div>
  )
}
