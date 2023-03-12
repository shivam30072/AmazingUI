import React, { useState } from 'react'
import '../index.css'

const user = ({ person }) => {
  const [toggle, setToggle] = useState(false);

  const clickHandler = () =>{
    setToggle(!toggle);
  }

  return (
    <div>
        <div className='m-1 border w-full p-2 h-[10vh] rounded-2xl '>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <img className='h-[8vh] rounded-full' src={person.avatar} alt='img' />
            <span className='ml-4 font-bold font-mono md:text-xl '>{person.profile.firstName} {person.profile.lastName}</span>
            </div>
            <div className='sm:mr-2'>
            <span className='sm:mr-2 font-light'>Rank: {person.id}</span>
            <button onClick={() => {clickHandler()}} className='border border-indigo-700 sm:p-1 rounded-xl text-indigo-700 bg-white  hover:text-white hover:bg-indigo-500 transition ease-in-out delay-150 hover:scale-110 duration-300'>Details</button>
            </div>
        </div>
        </div>
       {toggle && 
         <div className=' w-full bg-slate-300 rounded-2xl m-1 p-2 animation sm:flex sm:justify-between'>
          <div className='flex flex-col'>
            <span><b>Username:</b> <i>{person.profile.username}</i></span>
            <span><b>Bio:</b> <i>{person.Bio}</i></span>
          </div>
          <div>
            <p><span className='font-bold'>Job: </span><i>{person.jobTitle}</i></p>
            <p><span className='font-bold'>Email: </span><i>{person.profile.email}</i></p>
          </div>
         </div>
       }
    </div>
  )
}

export default user