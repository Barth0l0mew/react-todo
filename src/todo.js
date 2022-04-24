import React, {useContext} from "react";
import PropTypes from 'prop-types'
import context from "./context";
 function Todo(props){
   const {removeTodo}=useContext(context)
   
  return (
    <li className="menu__items">
      <span className={props.item.completed?'none':''}>
        <input type='checkbox'  checked={props.item.completed?'checked':''} onChange={()=> props.onChan(props.item.id)}></input>
      <strong>{props.index+1}</strong>
      &nbsp;
      {props.item.title}
     
      </span>
      <button className='btn' onClick={()=>removeTodo(props.item.id)}>&times;</button>
    </li>
  )
}
Todo.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onChan: PropTypes.func
}

export default Todo