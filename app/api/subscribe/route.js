import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
})

export async function POST(request) {
  const { email } = await request.json()

  if (!email) {
    return Response.json({ error: 'Email is required' }, { status: 400 })
  }

  try {
    await client.create({
      _type: 'subscriber',
      email: email,
      subscribedAt: new Date().toISOString(),
    })
    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error: 'Failed to save' }, { status: 500 })
  }
}