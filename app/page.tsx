import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
  <div className='w-screen h-screen bg-black text-white'>
    <div className="w-full h-full flex justify-center items-center max-w-xl mx-auto">
      <div>
        <h1 className='text-6xl text-white'>
          The Best AI Journal App Ever
        </h1>
        <p className='text-2xl text-white/60'>
          This app is brought to you by your machine overlords
        </p>
        <Link href='/journal'>
          <button className='bg-blue-600 px-4 py-2 rounded-lg text-xl'>
            Get Started
          </button>
        </Link>
      </div>
    </div>
  </div>
  )
}
