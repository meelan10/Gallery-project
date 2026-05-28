import React from 'react'

const App = () => {

const getData = () => {
 
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
