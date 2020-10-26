import React, {useState, useEffect} from 'react';
import {UserCard} from './UserCard';
import axios from 'axios';

export const UserList = () => {
const [users, setUsers] = useState([])
useEffect(() => {
axios ({
  method: 'GET',
  url: `https://jsonplaceholder.typicode.com/users`
}).then (res=>{setUsers(res.data)})
}, [])

  // console.log(users)
  return (
    <div className='main-cont'>
      <h1 className='first-title'>Companies</h1>
    {users.map(user=>(
      <UserCard user={user} key={user.id}/>
    ))}
    </div> 
    
  )
}
  