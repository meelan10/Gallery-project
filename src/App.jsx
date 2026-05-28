import React from 'react'
import axios from 'axios'

const App = () => {

const getData =async () => {
  const response =await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
  console.log(response)
}

  return (
    <div className='bg-black h-screen text-white'>
      <button 
      onClick={getData}
      className='bg-green-600 px-5 text-white rounded py-2 m-5 active:scale-95'
      >
        get data
      </button>
    </div>
  )
}

export default App
