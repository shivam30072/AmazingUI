import React from 'react'

const Navbar = () => {
  return (
    <div className='min-h-[8vh] bg-slate-200 flex justify-between font-serif'>
      <div className='flex justify-center items-center md:ml-4 ml-2 cursor-pointer'>
        <h1 className='text-normal md:text-2xl font-bold'>Hell<span className='text-rose-700'>Door</span></h1>
      </div>
      <div className='hidden sm:flex list-none sm:justify-center sm:items-center font-semibold '>
        <li className='mx-2 cursor-pointer hover:text-rose-500 hover:underline'>Program</li>
        <li className='mx-2 cursor-pointer hover:text-rose-500 hover:underline'>facility</li>
        <li className='mx-2 cursor-pointer hover:text-rose-500 hover:underline'>About</li>
        <li className='mx-2 cursor-pointer hover:text-rose-500 hover:underline'>Career</li>
      </div>
      <div className='flex justify-center items-center md:mr-4 mr-2'>
        <button onClick={() => alert('signed up successfully')} className=' md:px-3 md:py-[3px] px-2 rounded-lg text-orange-400 bg-white hover:bg-orange-400 hover:text-white transition ease-in-out delay-150 duration-300   hover:scale-110 font-mono'>Sign up</button>
      </div>
    </div>
  )
}

export default Navbar