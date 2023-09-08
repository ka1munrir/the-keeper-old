'use client'
import React from 'react'
import Link from 'next/link'

import useIsLoggedInStore from '../../hooks/store';
import useCurrentUserStore from '../../hooks/currentUserStore';

export default function Header() {
  const {isLoggedIn, pageHeader, change, setPageHeader} = useIsLoggedInStore();
  const {currentUser, logIn, logOut} = useCurrentUserStore();

  const header = isLoggedIn? 
    (<header className="margin-0 p-0 bg-slate-900 vh-10 flex justify-between">
      <div className='vw-40'></div>
      <h1 className="px-4 flex items-center justify-center text-4xl text-zinc-300" >{pageHeader}</h1>
      <nav className="flex justify-around px-8 text-zinc-400 h-full vw-40">
        <Link className="px-4 nav_link flex items-center justify-center text-xl" href={`/${currentUser?.userName}`} onClick={() => setPageHeader("")}>Dashboard</Link>
        <Link className="px-4 nav_link flex items-center justify-center text-xl" href={`/${currentUser?.userName}/leaderboard`}>Leaderboard</Link>
        <Link className="px-4 nav_link flex items-center justify-center text-xl" href={`/${currentUser?.userName}/history`}>History</Link>
        <Link className="px-4 nav_link flex items-center justify-center text-xl" href={`/`} onClick={() => {
          change()
          logOut();
        }}>Logout</Link>
      </nav>
    </header>) : 
    (<header className="margin-0 p-0 bg-slate-900 vh-10">
    <nav className="flex justify-end items-center px-8 text-zinc-400 h-full">
      <Link href={`/`} className="px-4 nav_link flex items-center justify-center text-xl">Home</Link>
      <Link href={`/signup`} className="px-4 nav_link flex items-center justify-center text-xl">Sign Up</Link>
      <Link href={`/login`} className="px-4 nav_link flex items-center justify-center text-xl">Log In</Link>
    </nav>
  </header>)
  return header;
}
