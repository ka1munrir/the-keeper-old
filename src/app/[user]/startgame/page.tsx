'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import useCurrentUserStore from '../../../../hooks/currentUserStore';
import useGameStore from '../../../../hooks/gameStore'

import {Rubik} from 'next/font/google'
const inter = Rubik({ 
    weight: '500',
    subsets: ['latin'],
    display: 'swap',
  })

export default function page() {
    const {player1, player2, route, setPlayer1, setPlayer2} = useGameStore();
    const {currentUser} = useCurrentUserStore();
    const router = useRouter();

    function submitHandler(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        router.push(`/${currentUser?.userName}/${route}`);
    }

    return (
        <div className='flex flex-col items-center justify-center center w-screen vh-80'>
            <h1 className='text-zinc-400 text-8xl mb-8'>Start Game</h1>
            <form className='text-zinc-300 border-2 rounded-md p-4 mt-8' onSubmit={(e) => submitHandler(e)}>
                <div className='flex justify-between'>
                    <input
                        className='rounded bg-slate-900 border p-2 font-thin my-4 text-lg wp-45'
                        type="text"
                        placeholder='Player 1 Username'
                        onChange={(e) => setPlayer1(e.target.value)}
                    />
                    <input
                        className='rounded bg-slate-900 border p-2 font-thin my-4 text-lg wp-45'
                        type="text"
                        placeholder='Player 2 Username'
                        onChange={(e) => setPlayer2(e.target.value)}
                    />
                </div>
                <button type="submit" className='text-zinc-900 bg-slate-500 rounded-lg p-4 text-lg w-full my-4'>Start</button>
            </form>
        </div>
    )
}
