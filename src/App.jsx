import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [userData, setuserData] = useState([]);

const getData =async () => {
  const response =await axios.get('https://picsum.photos/v2/list?page=3&limit=30')

  setuserData(response.data)

  console.log(response.data);
}

   let printUserData = 'No User Available'
   
   if (userData.length>0){
    printUserData = userData.map(function(elem , idx){
      return <div>
        <div className='h-40 w-44 bg-white rounded-xl'>
        <img className='h-[90%] object-cover ' src={elem.download_url} alt='' />
      </div>
      <h2>{elem.author}</h2>
      </div>
    })
   }

  return (
    <div className='bg-black overflow-auto h-screen text-white'>
      <button 
      onClick={getData}
      className='bg-green-600 px-5 text-white rounded py-2 m-5 active:scale-95'
      >
        Get data
      </button>
      <div className='flex flex-wrap gap-4' >
        {printUserData}
      </div>
    </div>
  )
}

export default App
