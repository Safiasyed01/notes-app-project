import React from 'react'

const App = () => {
  return (
    <div className='h-screen  bg-black'>
      <form className='flex p-9 items-start  ' >
        <div className='flex flex-col items-start  gap-4 w-full' >
          <input type="text" className='px-4 py-2 border-2 rounded w-1/2'  placeholder='Enter Tasks'/>
        <textarea type="text" className='px-4 h-39 border-2 rounded w-1/2' placeholder='Write Details'/>
        <button className='bg-white text-black w-1/2 px-4 py-2 rounded' >Add Note</button>
        </div>
 <img src="C:\Users\hp\OneDrive\Desktop\notes-app\notes-app\src\assets\—Pngtree—realistic yellow sticky note with_7689224.png" alt=""/>
      </form>
    </div>
  )
}

export default App