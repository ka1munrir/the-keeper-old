'use client'
import React from 'react'
import useSWR from 'swr';
import * as UserAPI from '../../network/userAPI';
import { useRouter } from 'next/navigation';
import useIsLoggedInStore from '../../../hooks/store';
import useCurrentUserStore from '../../../hooks/currentUserStore';
import useGameStore from '../../../hooks/gameStore';

type userDashProps = {
  params: {
    user: string
  }
}

export default function userDashboard({params}: userDashProps) {
  const {setPageHeader} = useIsLoggedInStore();
  const {currentUser, logOut, logIn} = useCurrentUserStore();
  const {setGameName, setOfficiator, setRoute} = useGameStore();
  const username = params.user;
  const router = useRouter();

  return (
    <div className='w-screen vh-85 flex justify-between p-6'>
      <div className='h-full wp-75 pl-16 pt-8 pr-8 '>
        <h1 className='text-zinc-200 text-5xl w-full border-b-2 pb-2'>Start</h1>
        <div className='w-full'>
          <div className='vw-15 mt-8 rounded-xl border-slate-50 border-4 flex flex-col items-center vh-25 cursor_stuff' onClick={() => {
            setGameName("Ping-Pong");
            setPageHeader("Ping-Pong");
            setRoute("/pingponggame");
            setOfficiator(currentUser?.userName)
            router.push(`/${currentUser?.userName}/startgame`)
          }}>
            <img 
              className='w-full rounded-t-lg vh-20'
              src="https://media.istockphoto.com/id/502189498/photo/table-tennis-ball-and-bat.jpg?s=612x612&w=0&k=20&c=FJ2A35yQlHI-6KFoKUfMHjqpXXkIZo1wFRZFJWgWk68=" 
              alt="" 
            />
            <h3 className='text-zinc-200 m-2'>Ping-Pong</h3>
          </div>
        </div>
      </div>
      <div className='h-full vw-20 p-4 rounded-3xl bg-slate-800 flex flex-col items-center'>
        <img 
          className='vw-15 hvw-15 rounded-full m-4'
          src="https://thispersondoesnotexist.com/" 
          alt="profile picture" 
        />
        <h1 className='text-zinc-300 text-4xl'>{currentUser?.firstName}</h1>
        <h1 className='text-zinc-300 text-3xl'> {currentUser?.lastName}</h1>
        <p className='text-zinc-600'>@{currentUser?.userName}</p>
        <div>
            
        </div>
      </div>
    </div>
  )
}
