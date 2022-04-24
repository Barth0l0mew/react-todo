import React from 'react'
import Todo from './todo'
import PropTypes from 'prop-types'
const styles ={
  li:{
    color: '#f3a'
  }
}

 function ToDoList (props){
 
  return (
    <ul className='menu'>
     {
       props.prop.map((items, key)=>{

         return (<Todo item={items} index={key} onChan={props.onTogle} key={key} ></Todo>)
       })
     }
    </ul>
  )
}
ToDoList.propTypes = {
  prop: PropTypes.arrayOf(PropTypes.object.isRequired),
  onTogle: PropTypes.func.isRequired
}
export default ToDoList