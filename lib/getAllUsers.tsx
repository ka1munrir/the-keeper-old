import React from 'react'

export default async function getAllUsers() {
  const res = await fetch(`http://localhost:3001/users`);
    
  if(!res.ok) throw new Error(`failed to fetch user data`);
  return res.json();
}
