import { v2 as cloudinary } from 'cloudinary'
import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function POST(request: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { public_id } = await request.json()
  await cloudinary.uploader.destroy(public_id)
  return NextResponse.json({ ok: true })
}
