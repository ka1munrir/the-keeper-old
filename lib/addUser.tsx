import React from 'react'

export default async function addUser(newUser: addUserType) {
    const res = await fetch(`http://localhost:3001/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
    
    if(!res.ok) throw new Error(`failed to fetch user data`)
    return res.json()
}
