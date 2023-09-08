'use client'
import React from 'react'
import {useState} from 'react'
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import * as PingPongAPI from '../../../network/pingPongAPI';
import useGameStore from '../../../../hooks/gameStore';

export default function page() {
    const {player1, player2, officiator} = useGameStore();
    const [score1, setScore1] = useState<number>(0);
    const [score2, setScore2] = useState<number>(0);
    const [gameProg, setGameProg] = useState<number[][]>([[0,0]]);
    const router = useRouter();

    function addProg1() {
        setScore1(score1 + 1);
        let currentProg = [...gameProg];
        currentProg.push([score1 + 1, score2]);
        setGameProg(currentProg);
    }
    function addProg2() {
        setScore2(score2 + 1);
        let currentProg = [...gameProg];
        currentProg.push([score1, score2 + 1]);
        setGameProg(currentProg);
    }

    function finishGame(){
        PingPongAPI.addPPGame({
            "player1UserID" : player1,
            "player2UserID" : player2,
            "officiatorUserID" : officiator,
            "gameScore" : gameProg,
            "winner" : score1 > score2 ? player1 : player2
        })
        router.push(`/${officiator}`)
    }

  return (
    <div className='flex flex-col items-center p-8'>
        <div className='flex vh-65 vw-100'>
            <div className='flex flex-col p-4 justify-center items-center vw-'>25
                <h3 id='player1' className='text-zinc-300 text-4xl mb-8'>@{player1}</h3>
                <div className='bg-green-500 rounded-xl vw-15 vh-40 flex justify-center items-center'>
                    <p className='text-8xl score'>{score1}</p>
                </div>
                <button className='bg-green-500 mt-8 vw-10 vh-5 rounded-lg text-2xl' onClick={() => addProg1()}>+1</button>
            </div>
            <div className='flex flex-col justify-around items-center'>
                <div className='vh-5 mb-24'></div>
                <h1 className='text-zinc-400 text-9xl'>:</h1>
                <button className='bg-red-700 mt-24 vw-10 vh-5 rounded-lg text-2xl text-white' onClick={() => finishGame()}>Submit</button>
            </div>
            <div className='flex flex-col p-4 justify-center items-center vw-'>25
                <h3 id='player2' className='text-zinc-300 text-4xl mb-8'>@{player2}</h3>
                <div className='bg-green-500 rounded-xl vw-15 vh-40 flex justify-center items-center'>
                    <p className='text-8xl score'>{score2}</p>
                </div>
                <button className='bg-green-500 mt-8 vw-10 vh-5 rounded-lg text-2xl' onClick={() => addProg2()}>+1</button>
            </div>
        </div>
    </div>
  )
}
