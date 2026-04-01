import {useContext} from 'react'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

function Header() {
  
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleLogout  = () =>{
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    setIsLoggedIn(false)
    console.log('Logged out');
    navigate('/login')
  }
  return (

    <>
       <nav className='navbar container pt-3 pb-3 align-items-start'>
        <Link className='navbar-brand text-light' to='/'>Stock Prediction Portal</Link>

        <div>
          {isLoggedIn ? (
            <>
            <Button text = 'Dashboard' design='btn-info' url = '/dashboard' />
            &nbsp;  &nbsp;
            <button className='btn btn-danger' onClick={handleLogout}>Logout</button>

            </>
            ):(
            <>
            <Button text = 'Login' design='btn-outline-info' url = '/login' />
            &nbsp;  &nbsp;
           <Button text = 'Register' design='btn-info' url = '/register'/>
    
            </>
            
          )}
           
        </div>

       </nav>
    </>
  )
}

export default Header