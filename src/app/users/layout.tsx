// import '../globals.css'
import type { Metadata } from 'next'
import {Rubik} from 'next/font/google'
import Link from 'next/link'

const inter = Rubik({ 
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Keeper',
  description: 'A personal hub for anything you might need in life',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950`}>
          <nav className="flex justify-end items-center px-8 text-zinc-400 vh-5">
            <Link href={`/`} className="px-4 nav_link flex items-center justify-center text-xl">Home</Link>
            <Link href={`/signup`} className="px-4 nav_link flex items-center justify-center text-xl">Sign Up</Link>
            <Link href={`/login`} className="px-4 nav_link flex items-center justify-center text-xl">Log In</Link>
          </nav>
        {children}
      </body>
    </html>
  )
}
