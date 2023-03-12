import { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import UserList from './components/UserList'
import background from './components/background.svg'
import loader from './components/loader.svg'


const App = () => {
  const BASE_URL = 'https://602e7c2c4410730017c50b9d.mockapi.io/users'

const [allUsers, setAllUsers] = useState([]);

const fetchingUsers = async () => {
  try{
    const { data } = await axios.get(BASE_URL);
    setAllUsers(data.slice(10));  
  }catch(error){
    console.log(error);
  }
 
}

useEffect(() => {
  fetchingUsers();
}, [])



  return (
    <div  style={{ backgroundImage: `url(${background})` }}>
      
    
      <Navbar />
      
      {allUsers.length === 0 ?
       <div className='max-w-[1640px] h-[92vh] flex justify-center items-center'>
        <img className='w-[50px] h-[50px]' src={loader} alt='loading' /><span className='font-light'>loading...</span>
        </div>
         : 
         <div className='flex justify-center '>
         <UserList allUsers={allUsers}/>
         </div>
      }
     
     </div>
  )
}

export default App