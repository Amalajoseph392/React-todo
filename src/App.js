
import './App.css';
import {useState} from 'react'


function App() {
  const[toDos,setToDos]=useState([])
  const [toDo,setToDo]=useState(' ')
  return (
   <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-10;" >
    <div className="text-center">
    <h1 className='text-center text-white font-bold text-xl'>ToDo List</h1>
   </div>
   <div className="text-center text-white">
    <br/>
    <h2 text-white>Whoop, It's Friday</h2>
    </div>
    <div className="flex justify-center items-center mt-0 w-80 h-8 bg-white  rounded-2xl p-1">
      <input className="w-full h-6 border-transparent outline-none" value={toDo} onChange={(e)=>setToDo(e.target.value)}type="text" placeholder="Add item.."/>
      <i className="cursor-pointer text-lg font-light text-gray-500 mr-1"onClick={()=>setToDos([...toDos,{id:Date.now(),text: toDo,status:false}])}className="fas fa-plus"></i>
      </div>
      <div className="flex justify-center items-center flex-col">
        { toDos.map((obj)=>{
return(
        <div className="mt-2 w-80 h-8 bg-white  flex items-end justify-between rounded-2xl p-1">
          <div className="flex items-center justify-start">
            <input onChange={(e)=>{
              console.log(e.target.checked)
              console.log(obj)
              setToDos(toDos.filter(obj2=>{
                if(obj2.id===obj.id){
                  obj2.status=e.target.checked
                }
                return obj2
              }))

            }}
            
            value={obj.status}type="checkbox" name="" id=""/>
            <p className='ml-1 text-gray-500 font-medium flex'>{obj.text}</p>
            </div>
            <div className="right">
              <i  onClick={(e)=>{
                setToDos(toDos.filter(obj2=>{
                  let temp;
                  if(obj2.id!=obj.id){
                    temp=obj2
                  }
                  return temp
                }))
              }}className="fas fa-times"></i>
              </div>

              <div className='strike'>

<i onClick={(e)=>{
  setToDos(toDos.map(obj2=>{
    if(obj.id===obj2.id){
      return { ...obj2, strike: true };
    }
    return obj2;
  }))}}
  
  className="fa fa-strikethrough" aria-hidden="true" ></i>
              
          </div>
        </div>)
        })}


        {toDos.map((obj)=>{
          if(obj.status){
          return(<h1>{obj.text}</h1>)
        }
        return null
        })}
   </div>
   </div>
  );
}

export default App;


