import React from 'react'

export default function page() {
  return (
    <div className='w-screen vh-85 border-4 border-slate-50 flex justify-between'>
      <div className='border-4 border-slate-50 h-full wp-75'></div>
      <div className='border-4 border-slate-50 h-full wp-20 text-center p-4'>
        <h1 className='text-zinc-300 text-4xl'>First Name</h1>
        <h1 className='text-zinc-300 text-3xl'> Last Name</h1>
        <p className='text-zinc-600'>@userid</p>
        <div>

        </div>
      </div>
    </div>
  )
}
