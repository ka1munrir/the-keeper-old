// 'use client'
import './globals.css'
import type { Metadata } from 'next'
import {Rubik} from 'next/font/google'
import Link from 'next/link'
// import { useState } from 'react'
import Header from './Header'

const inter = Rubik({ 
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Keeper',
  description: 'A personal hub for anything you might need in life (scorekeeping)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
