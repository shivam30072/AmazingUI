import React from 'react'

import User from './User'

const userList = ({ allUsers }) => {
  return (
    <div  className=' flex flex-col sm:w-[70%] mt-7 shadow-2xl shadow-black/20 rounded-xl  bg-white '>
       <div className='mt-4 ml-4 sm:ml-12 mb-4 w-[80%] font-bold px-2 py-1 text-white bg-indigo-300'> <span className=''>List of Users</span>
       </div>
       <div className='flex flex-col ml-4 sm:ml-10 w-[80%]'>
       {allUsers.map((person, ind) => (
        <User person={person}  key={ind}/>
       ))}
       </div>
    </div>
  )
}

export default userList