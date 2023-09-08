'use client'
import Link from 'next/link'

export default function Home() {

  return (
    <>
      <main className="vh-80">
        <div className='flex flex-col justify-center items-center h-full'>
          <h1 className='text-zinc-400 text-6xl text-center w-full'>Welcome to Your <br/>Scorekeeping Hub</h1>
          <p className='text-zinc-400 italic text-center mt-8 opacity-60'>A scoreboard app to help you in your intense competition that <br/> can not only keep score but compare you to other users world-wide</p>
        </div>
      </main>
    </>
    
  )
}
