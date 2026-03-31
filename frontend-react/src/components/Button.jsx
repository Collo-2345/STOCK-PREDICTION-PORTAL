import React from 'react'
import { Link } from 'react-router-dom'

function Button(props) {
  return (
   
    <>
     <Link href="" className={`btn ${props.design}`} to={props.url}>{props.text}</Link>

    
    </>
  )
}

export default Button