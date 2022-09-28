import React, { useEffect, useState } from 'react'

export default function Landing() {
  return (
    <div className="bg-indigo-900 relative overflow-hidden h-screen">
      <img
        src="/images/auckland.jpg"
        className="absolute h-full w-full object-cover"
        alt=""
      />
      <div className="inset-0 bg-black opacity-25 absolute"></div>

      <section className="flex justify-center mt-px">
        <img className="w-1/5" src="images/spin.gif" alt="" />
      </section>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div className="w-full flex flex-col items-center relative z-10">
          <h1 className="font-extrabold text-7xl text-center sm:text-8xl text-white leading-tight mt-4">
            GeoDrop
          </h1>
          <p className="font-extrabold text-center sm:text-8xl text-white leading-tight mt-4">
            Redefining messaging on the Internet
          </p>
          <a
            href="/"
            className="block bg-gray-800 hover:bg-gray-900 py-3 px-4 text-lg text-white font-bold uppercase mt-10"
          >
            Start Discovering
          </a>
        </div>
      </div>
    </div>
  )
}
