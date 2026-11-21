'use client'
import dynamicImport from 'next/dynamic'

const VideosClient = dynamicImport(() => import('./VideosClient'), { ssr: false })
export default function AdminVideosPage() {
  return <VideosClient />
}
