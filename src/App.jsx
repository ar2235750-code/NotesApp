import React, { useState } from 'react'
import {X} from 'lucide-react'


const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([]);

  const submitHandler = (e)=>{
    e.preventDefault();

    const copytask = [...task];

    copytask.push({title,details})
    setTask(copytask);

    // console.log(copytask);
    // console.log(task);
    // console.log(title);
    // console.log(details);

    setTitle('')
    setDetails('')
  }
  const deleteNote = (idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx,1);

    setTask(copyTask);
  }

  return (
    <div className=' lg:flex h-screen
     bg-black text-white'>
      
      <form onSubmit={(e)=>{
        submitHandler(e);
      }} className='flex flex-col gap-4 p-10 items-start lg:w-1/2 '>

        <h1 className='text-3xl font-bold'>Add Notes</h1>

        <input 
          type="text" 
          placeholder='Enter Notes Heading'
          className='px-5 h-20 py-2 border-2 rounded  w-full outline-none font-medium'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          } }
        />

        <textarea
          type="text"
          placeholder='Write Details'
          className='px-5 h-32 py-2 border-2 rounded w-full outline-none font-medium'
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value);
          } } />

        <button 
          className='px-5 h-18 py-1 border-2 rounded  w-full bg-white text-black text-xl font-medium active:scale-95'>
          Add Note
        </button>

      </form>

      <div className='p-10 lg:w-1/2  lg:border-l-2 bg-black '>

        <h1 className='text-3xl font-bold '>Recent Notes</h1>

        <div className='flex flex-wrap gap-5 mt-6 lg:h-[90%] overflow-auto scrollbar-none'>
          {task.map(function(elem,idx){
            return <div key={idx} className='flex justify-between flex-col items-start relative h-52 w-40 rounded-2xl bg-white overflow-auto scrollbar-none p-5 bg-[url("https://tse4.mm.bing.net/th/id/OIP.xHGYntepnOOygB-4FOKPtAAAAA?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3")] bg-cover fit-cover '>
            <div>
              <h3 className='text-black text-xl font-bold leading-tight'>{elem.title}</h3>
              <p className='mt-2 leading-tight text-black font-500'>{elem.details}</p>
            </div>
            <button onClick ={()=>{
              deleteNote(idx);
            }}
             className='w-full bg-red-500 font-bold mt-3 rounded-full active:scale-95 cursor-pointer'>Delete </button>
            </div   >
          })}

        </div> 

      </div>

    </div>
  )
}

export default App