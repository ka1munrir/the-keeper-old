// 'use client'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
import getAllUsers from '../../../lib/getAllUsers';
import addUser from '../../../lib/addUser';

export default async function page() {

  const [signUpFirstName, setSignUpFirstName] = useState("");
  const [signUpLastName, setSignUpLastName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpRepassword, setSignUpRepassword] = useState("");
  const [users, setUsers] = useState<getUserType[]>([]);
    
  useEffect(() => {
      const fetchData = async () => {
          const userData: getUserType[] = await getAllUsers();
          setUsers(userData);
      };

      fetchData();
  }, []);
  

  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();

    const userIdHelper = users.filter(user => user[`userName`].includes(signUpUsername));
    const userId = userIdHelper.length === 0 ? signUpUsername : `${signUpUsername}${userIdHelper.length}`

    addUser({
      "firstName": signUpFirstName,
      "lastName": signUpLastName,
      "email": signUpEmail,
      "userName": signUpUsername,
      "password": signUpPassword,
      "userId": userId
    })
  }

  return (
    <div className='flex justify-center items-center vh-85 w-screen'>
        <h1 className='text-zinc-400 text-8xl mr-16'>Sign Up</h1>
        <form className="border-2 rounded-md p-4 bg-slate-900 vw-30 " onSubmit={handleSubmit}>
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
              type="text"
              className='rounded bg-slate-900 border p-2 font-thin text-lg w-full my-4'
              placeholder='Password'
              value={signUpPassword}
              onChange={(e) => setSignUpPassword(e.target.value)}
            />
            <br/>
            <input
              type="text"
              className='rounded bg-slate-900 border p-2 font-thin text-lg w-full my-4'
              placeholder='Re-type Password'
              value={signUpRepassword}
              onChange={(e) => setSignUpRepassword(e.target.value)}
            /> 
            <br/>
            <button type="submit" className='text-zinc-900 bg-slate-500 rounded-lg p-4 text-lg w-full my-4'>Submit</button>
        </form>
    </div>
  )
}
