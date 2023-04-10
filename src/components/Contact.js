import React from 'react'
import './From.css'

function Contact() {
    return (
      <div class="flex z-10 relative items-center justify-center from-manage bg-red-100">
      <div class="bg-white rounded-2xl border shadow-x1 p-10 max-w-lg">
        <div class="flex flex-col items-center space-y-4">
          <h1 class="font-bold text-2xl text-gray-700 w-4/6 text-center">
            NewsLetters
          </h1>
          <p class="text-sm text-gray-500 text-center w-5/6">
            Hello, please enter your email address to send our MobiShop.
          </p>
          <input
            type="text"
            placeholder="Email"
            class="border-2 rounded-lg w-full h-12 px-4"
          />
          <input
            type="password"
            placeholder="Password"
            class="border-2 rounded-lg w-full h-12 px-4"
          />
          <button
            class="bg-red-400 text-white rounded-md hover:bg-red-500 font-semibold px-4 py-3 w-full"
          >
            Send
          </button>
        </div>
      </div>
    </div>
    )
}

export default Contact
