'use client'
import dynamicImport from 'next/dynamic'

const BioClient = dynamicImport(() => import('./BioClient'), { ssr: false })
export default function AdminBioPage() {
  return <BioClient />
}
