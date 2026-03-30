import React from 'react'

function Button(props) {
  return (
   
    <>
     <a href="" className={`btn ${props.design}`}>{props.text}</a>

    
    </>
  )
}

export default Button