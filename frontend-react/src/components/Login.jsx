import React,{useContext, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { AuthContext } from '../AuthProvider'

//use to navigate to page after login
import{useNavigate} from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading]   = useState(false)
  const [error, setError]      = useState('')
  const {setIsLoggedIn} = useContext(AuthContext)
  const navigate  = useNavigate();

  const handleLogin = async (e) => {
    //prevent page from refresh
    e.preventDefault();
    setLoading(true)

    const userData = {username, password}
  
    try{
      const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', userData)
      // storing the access token and refresh token is web browser local storage
      localStorage.setItem('access_token', response.data.access)
      localStorage.setItem('refresh_token', response.data.refresh)
      localStorage.setItem('user', userData.username )
      console.log('Logged in successful!');
      setIsLoggedIn(true)
      navigate('/')
    }
    catch(error){

      console.error('Invalid Credentials!',error)
      setError('Invalid credentials!,Please try Again')

    }
    finally{
      setLoading(false)
    }
    
  }

  return (
    <>
       <div className='container'>
        <div className="row justify-content-center">
            <div className="col-md-6 bg-light-dark p-5 rounded">
              <h3 className='text-light text-center pb-3'>Login In</h3>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                <input type="text" placeholder='Username' className='form-control' value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="mb-3">
                 <input type="password"  placeholder='Set Password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)}/>
                {error && <div className='text-danger'>{error}</div>}
                </div>
                
                {loading ? (
                  <button type='submit' className='btn btn-info d-block mx-auto' disabled> <FontAwesomeIcon icon={faSpinner} spin/> Logging in...</button>
                ) : (

                  <button type='submit' className='btn btn-info d-block mx-auto' >Login</button>
                )}
              
              </form>
            </div>
        </div>
     </div>
    </>
  )
}

export default Login
