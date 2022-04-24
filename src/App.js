
import React, {useEffect} from 'react';
import context from './context';
import ReactDOM from 'react-dom/client';
import './App.css';
import ToDoList from './ToDoList'
import AddToDo from './addtodo';
import Loader from './loader';


function App() {
  const [load,setloading]=React.useState(true)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=15')
    .then(response => response.json())
    .then(todos=> 
     setTimeout(()=> {
        settodo(todos);
        setloading(false)
      },2000))
  },[])
 
  document.title='REACT TuTORIAL'
  const [todo,settodo] = React.useState([
    // {id:1, completed:false, title:'News1', discription:'News from react'},
    // {id:2, completed:false, title:'News2', discription:'News 2 from react'},
    // {id:3, completed:true, title:'News3', discription:'News 3 from react'},
    // {id:4, completed:false, title:'News4', discription:'News 4 from react'}
    //default =0
  ])
function removeTodo(id){
  settodo(
    todo.filter(todo=>todo.id!==id)
  )
}
  
function togle(id){
  console.log (`check todo ${id}`)
  settodo( todo.map((item)=>{
    if (item.id === id){
      item.completed=!item.completed;
    }
    return item
  }))
  console.log (todo)
   
}
function add(value){
 console.log(value)
 console.log(todo)
 settodo(todo.concat([{
   id:todo.length+1,
   status:false,
   title:`News ${todo.length+1}  ${value}`,
   discription:`News ${todo.length+1} ${value}`
 }]))
 console.log(todo)
}
  return (
    <context.Provider value={{removeTodo}}>
   <div className='wrapper'> 
      {load? <Loader></Loader>:null}
      <h1 style={{textAlign:'center', color:'blue'}}>React tutorial</h1>
      <AddToDo create={add}></AddToDo>
      {todo.length?  <ToDoList prop={todo} onTogle={togle}></ToDoList>:load?null:<h5>No list</h5>}
    
   </div>
   </context.Provider>
    
  );
}

export default App;
