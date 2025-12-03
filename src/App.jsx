import React, { useState } from 'react'

const App = () => {
  const [Title, setTitle] = useState('')
  const [details, setdetails] = useState('')
  const [Task, setTask] = useState([])
  const submitHandler =(e)=>{
    e.preventDefault()
  const copyTask = [...Task];
  copyTask.push({Title,details})
  setTask(copyTask)
  console.log(Task)
    setTitle('')
    setdetails('')
  }
  return (
    <div className='h-screen lg:flex  bg-black'>
      
      {/* <h1 className='text-3xl font-bold'>Add Notes</h1> */}
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex gap-4   lg:w-1/2 flex-col items-start p-9 ' >
              <h1 className='text-3xl font-bold'>Add Notes</h1>

        {/* <div className='flex flex-col items-start  gap-4 w-full' > */}
        {/* first one */}
          <input type="text" className='px-4  w-full font-medium py-2 border-2 rounded outline-none '  placeholder='Enter Tasks'
          value={Title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
          />
        <textarea type="text" className='px-4 w-full font-medium h-30 py-2 flex items-start flex-row border-2 outline-none rounded ' placeholder='Write Details'
        value={details}
        onChange={(e)=>{
          setdetails(e.target.value)
        }}/>
        <button className='bg-white text-black w-full font-medium outline-none  active:bg-gray-600' >Add Note</button>
        {/* </div> */}
 
      </form>
      <div className='flex lg:w-1/2 border-l-3 flex-wrap p-10  gap-5'>
 <h1 className='text-3xl font-bold'>Your Notes</h1>        
 <div className='flex flex-wrap gap-4 mt-7 h-full overflow-auto'> 
  {Task.map(function( elem ,idx){
    return     <div key={idx} className='h-52 w-40 rounded-xl p-4 bg-gray-400'>
      <h3 className='leading-tight text-xl font-bold'>{elem.Title}
        </h3>
 <p className='mt-2 leading-tight font-medium text-gray-700'>{elem.details}</p>      
    </div>


  })}


</div>
      </div>
    </div>
  )
}

export default App