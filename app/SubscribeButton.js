'use client'

import { useState } from 'react'

export default function SubscribeButton() {
  const [subscribed, setSubscribed] = useState(false)
  return (
    <div className="flex justify-center gap-4 flex-wrap">
      {!subscribed && (
        <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-full text-gray-800 w-72 focus:outline-none bg-white border-2 border-white"
        />
      )}
      <button
        onClick={() => setSubscribed(true)}
        className="bg-white text-[#091c47] font-bold px-6 py-3 rounded-full hover:bg-blue-100 transition"
      >
        {subscribed ? 'Subscribed ✓' : 'Subscribe!'}
      </button>
    </div>
  )
}