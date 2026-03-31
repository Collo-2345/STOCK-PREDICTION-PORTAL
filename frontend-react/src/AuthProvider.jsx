import {createContext, useContext, useState} from 'react'

//create a context
const AuthContext = createContext();

function AuthProvider({children}) {
    const [isLoggedIn, setIsLoggedIn] = useState(
//check if user is logged in and the return true or false using the !!
          !!localStorage.getItem('accessToken')
    )
  return (
   <>
   <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
    {children}
   </AuthContext.Provider>
   
   </>
  )
}

export default AuthProvider
export {AuthContext}