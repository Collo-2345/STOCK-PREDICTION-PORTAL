import React from 'react'
import Button from './Button'

function Header() {
  return (

    <>
       <nav className='navbar container pt-3 pb-3 align-items-start'>
        <a href="" className='navbar-brand text-light'>Stock Prediction Portal</a>

        <div>
           <Button text = 'Login' design='btn-outline-info' />
            &nbsp;  &nbsp;
           <Button text = 'Register' design='btn-info'/>
        </div>

       </nav>
    </>
  )
}

export default Header