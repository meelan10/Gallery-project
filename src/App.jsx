import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [userData, setuserData] = useState([]);
  const [index, setindex] = useState(1)

const getData =async () => {
  const response =await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)

  setuserData(response.data);
}

useEffect(function(){
  getData()
},[index])
  
   let printUserData = <h3 className='text-gray-400'>Looding </h3>
   
   if (userData.length>0){
    printUserData = userData.map(function(elem , idx){
      return <div key={idx}>
       <a href={elem.url} target='_blank'>
         <div className='h-40 w-44 bg-white rounded-xl overflow-hidden'>
        <img className='h-full object-cover w-full' src={elem.download_url} alt='' />
      </div>
      <h2 className='font-bold'>{elem.author}</h2>
      </a>
      </div>
    })
   }

  return (
    <div className='bg-black overflow-auto h-screen text-white'>
      <h2 className='text-6xl fixed bg-red-500'>{index}</h2>
      <div className='flex flex-wrap gap-4 p-2' >
        {printUserData}
      </div>
      <div className='flex justify-center items-center p-4'>
        <button className='bg-amber-400 text-sm text-black rounded px-4 py-2 font-semibold cursor-pointer active:scale-95'
        onClick={()=>{
        if(index>0) {
          setindex(index-1)
          printUserData = 'Loading...'
        }
        }}
        >prev...
        
        </button>
        <button 
        className='bg-amber-400 text-sm text-black rounded px-4 py-2 font-semibold cursor-pointer active:scale-95'
        onClick={()=>{
        setindex(index + 1)
        printUserData = 'loading...'
        }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App
