'use client'

import dynamic from 'next/dynamic'

const FotosClient = dynamic(() => import('./FotosClient'), { ssr: false })

export default function FotosWrapper() {
  return <FotosClient />
}
