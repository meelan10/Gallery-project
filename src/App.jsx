import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [userData, setuserData] = useState([]);

const getData =async () => {
  const response =await axios.get('https://picsum.photos/v2/list?page=2&limit=30')

  setuserData(response.data)

  console.log(response.data);
}

   let printUserData = 'No User Available'

  return (
    <div className='bg-black h-screen text-white'>
      <button 
      onClick={getData}
      className='bg-green-600 px-5 text-white rounded py-2 m-5 active:scale-95'
      >
        Get data
      </button>
      <div >
        {printUserData}
      </div>
    </div>
  )
}

export default App
