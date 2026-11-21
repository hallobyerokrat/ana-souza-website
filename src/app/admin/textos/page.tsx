'use client'
import dynamicImport from 'next/dynamic'

const TextosClient = dynamicImport(() => import('./TextosClient'), { ssr: false })
export default function AdminTextosPage() {
  return <TextosClient />
}
