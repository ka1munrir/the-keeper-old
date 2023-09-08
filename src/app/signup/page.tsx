'use client'
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import useSWR from 'swr';
import * as UserAPI from '../../network/userAPI';

export default function page() {

  const [signUpFirstName, setSignUpFirstName] = useState("");
  const [signUpLastName, setSignUpLastName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpRepassword, setSignUpRepassword] = useState("");
  const [problem, setProblem] = useState("");
    
  let {data, error} = useSWR("empty", UserAPI.getUsers);
  const router = useRouter();
  
  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    data ?  null : data = [{
      "id": 1,
      "firstName": "first Name",
      "lastName": "last Name",
      "email": "email@email.com",
      "userName": "username",
      "password": "password"
    }];
    
    const userNameHelper = data.filter(user => user[`userName`] === signUpUsername);

    if(userNameHelper.length === 0) {
      if(signUpPassword === signUpRepassword){
        UserAPI.addUser({
          "firstName": signUpFirstName,
          "lastName": signUpLastName,
          "email": signUpEmail,
          "userName": signUpUsername,
          "password": signUpPassword
        });
        router.push('/login');
      }else{
        setProblem("Please be sure your passwords match")
      }
    }else{
      setProblem("That username is already taken")
    }



    




  }

  return (
    <div className='flex justify-center items-center vh-85 w-screen'>
        <h1 className='text-zinc-400 text-8xl mr-16'>Sign Up</h1>
        <form className="border-2 rounded-md p-4 bg-slate-900 vw-30 text-zinc-300" onSubmit={handleSubmit}>
            <div className='flex justify-between'>
                <input 
                  type="text"
                  className='rounded bg-slate-900 border p-2 font-thin my-4 text-lg wp-45'
                  placeholder="First Name"
                  value={signUpFirstName}
                  onChange={(e) => setSignUpFirstName(e.target.value)}
                  />
                <input
                  type="text"
                  className='rounded bg-slate-900 border p-2 font-thin my-4 text-lg wp-45'
                  placeholder="Last Name"
                  value={signUpLastName}
                  onChange={(e) => setSignUpLastName(e.target.value)}
                />
            </div>
            <input
              type="text"
              className='rounded bg-slate-900 border p-2 font-thin my-4 text-lg w-full'
              placeholder='Email'
              value={signUpEmail}
              onChange={(e) => setSignUpEmail(e.target.value)}
            />
            <br/>
            <input
              type="text"
              className='rounded bg-slate-900 border p-2 font-thin my-4 text-lg w-full'
              placeholder='Username'
              value={signUpUsername}
              onChange={(e) => setSignUpUsername(e.target.value)}
            />
            <br/>
            <input
              type="password"
              className='rounded bg-slate-900 border p-2 font-thin text-lg w-full my-4'
              placeholder='Password'
              value={signUpPassword}
              onChange={(e) => setSignUpPassword(e.target.value)}
            />
            <br/>
            <input
              type="password"
              className='rounded bg-slate-900 border p-2 font-thin text-lg w-full my-4'
              placeholder='Re-type Password'
              value={signUpRepassword}
              onChange={(e) => setSignUpRepassword(e.target.value)}
            /> 
            <br/>
            <p className='text-red-500'>{problem}</p>
            <button type="submit" className='text-zinc-900 bg-slate-500 rounded-lg p-4 text-lg w-full my-4'>Submit</button>
        </form>
    </div>
  )
}
