import React from "react"
function Loader(){
  return(
    <div style={{display:'flex', justifyContent:'center'}}>
    <div className='lds-dual-ring'></div>
    </div>
  )
}
export default Loader