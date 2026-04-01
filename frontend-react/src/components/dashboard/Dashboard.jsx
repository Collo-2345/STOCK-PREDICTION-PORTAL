
import {useEffect} from 'react'
import axiosInstance from '../../anxiosinstance'

function Dashboard() {
    const username  = localStorage.getItem('user')
   
    useEffect(() => {
       const fetchProtectedData = async () => {
           try{
           const response = await axiosInstance.get('/protected-view/')

           console.log('success:', response.data);
           }
           catch(error){
            console.error('Error fetching data!', error)
           }
         
       }
       fetchProtectedData();
    }, [])
  return (
         <>

           <div className="container">
                <div className="text-center">
                  <h1 className='text-light'>Welcome {username}</h1>
                  <br />
                  <p className='text-light lead'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/> Aut ad aperiam excepturi
                     id aliquam impedit maiores iure eos possimus <br/>doloribus facere molestias,
                     voluptatem eveniet cumque nihil provident nobis. Placeat, facere.</p>
               
           </div>
           </div>
           </>
         
  )
}

export default Dashboard