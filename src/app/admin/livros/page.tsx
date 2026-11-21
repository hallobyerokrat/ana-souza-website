'use client'
import dynamicImport from 'next/dynamic'

const LivrosClient = dynamicImport(() => import('./LivrosClient'), { ssr: false })
export default function AdminLivrosPage() {
  return <LivrosClient />
}
