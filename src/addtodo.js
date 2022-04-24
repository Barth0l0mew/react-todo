import React,{useState} from "react";
import PropTypes from 'prop-types'

function AddToDo(props){

  const [value,setvalue]= useState('')
  function handler(event){
    event.preventDefault();
    if (value.trim()){
      props.create(value)
      setvalue('')
    }
  }
  return (<form className="form" onSubmit={handler}>
    <input className="input" placeholder="TODO" value={value} onChange={event=>{
      return setvalue(event.target.value);
        
        }}></input>
    <button type='submit' className="addbtn">Add ToDo</button>
  </form>
 
  )
  console.log (value)
}
AddToDo.propTypes={
  create: PropTypes.func.isRequired
}
export default AddToDo