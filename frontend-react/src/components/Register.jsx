import React,{useState} from 'react'
import axios from 'axios'

function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword]  = useState('')

  const handleRegistration = async (e) => {
    e.preventDefault();
    
    //User data object to be sent to the django rest api (serializer) using Axios
    const userData = {
      username, email,password
    }
    try{
       const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', userData)
       console.log(response.data)
       console.log('RegistrationSuccessful!');
    }
    catch(error){
      console.error('Registration error', error.response.data)
    }
    
  }
  return (
   <>
   
     <div className='container'>
        <div className="row justify-content-center">
            <div className="col-md-6 bg-light-dark p-5 rounded">
              <h3 className='text-light text-center pb-3'>Create an Account</h3>

              <form onSubmit={handleRegistration}>

                <input type="text" placeholder='Username' className='form-control mb-3' value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type="email" placeholder='Email'  className='form-control mb-3' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password"  placeholder='Set Password' className='form-control mb-5' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type='submit' className='btn btn-info d-block mx-auto' >Register</button>
              </form>
            </div>
        </div>
     </div>
   </>
  )
}

export default Register