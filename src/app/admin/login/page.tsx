'use client'
import dynamicImport from 'next/dynamic'

const LoginClient = dynamicImport(() => import('./LoginClient'), { ssr: false })
export default function AdminLoginPage() {
  return <LoginClient />
}
