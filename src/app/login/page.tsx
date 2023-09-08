'use client'
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import * as UserAPI from '../../network/userAPI';
import useCurrentUserStore from '../../../hooks/currentUserStore';
import useIsLoggedInStore from '../../../hooks/store';


export default function LogInPage() {

  const {logIn} = useCurrentUserStore();
  const {change, setPageHeader} = useIsLoggedInStore();

  const [logInUsername, setLogInUsername] = useState("");
  const [logInPassword, setLogInPassword] = useState("");
  const [problem, setProblem] = useState("");


  let {data, error} = useSWR("empty", UserAPI.getUsers);

  const router = useRouter(); 

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();

    data ?  null : data = [{
      "id": 1,
      "firstName": "first Name",
      "lastName": "last Name",
      "email": "email@email.com",
      "userName": "username",
      "password": "password",
    }];
    const userNameHelper = data.filter(user => user[`userName`] === logInUsername);
    const {userName, password, firstName, lastName, email, id} = userNameHelper[0];
    
    if(logInUsername !== ""){
      if(userName === logInUsername) {
        if(logInPassword !== ""){
          if(logInPassword === password){
            logIn(userNameHelper[0]);
            change();
            setPageHeader("");
            // console.log(userNameHelper)
            // console.log(userNameHelper[0])
            // console.log(currentUser)
            router.push(`/${userName}`);
          }else{
            setProblem(`You password is incorrect`)
          }
        }else{
          setProblem("Please enter your password")
        }
      }else {
        setProblem("Your username is incorrect")
      }
    }else{
      setProblem("Please enter a username")
    }
    
    
  }

  return (
    <div className='flex justify-center items-center vh-80 w-screen'>
      <h1 className='text-zinc-400 text-8xl mr-16'>Log In</h1>
        <form className=" border-2 rounded-md p-4 bg-slate-900 vw-30 text-zinc-300" onSubmit={handleSubmit}>
            <input 
              type="text"
              className='rounded bg-slate-900 border p-2 font-thin my-4 text-lg w-full'
              placeholder='Username'
              value={logInUsername}
              onChange={(e) => setLogInUsername(e.target.value)}
            />
            <br/>
            <input
              type="password"
              className='rounded bg-slate-900 border p-2 font-thin text-lg w-full my-4'
              placeholder='Password'
              value={logInPassword}
              onChange={(e) => setLogInPassword(e.target.value)}
            /> 
            <br/>
            <p className='text-red-500'>{problem}</p>
            <button type="submit" className='text-zinc-900 bg-slate-500 rounded-lg p-4 text-lg w-full my-4'>Submit</button>
        </form>
    </div>
  )
}
