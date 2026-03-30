import React from 'react'
import Button from './Button'

function Main() {
  return (
   <>
       <div className='container'>
          <div className='p-5 text-center bg-light-dark rounded'>
            <h1 className='text-light'>Stock Prediction Portal</h1>

            <p className='text-light lead'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Veniam, adipisci accusantium provident repudiandae magnam ex quod aperiam maxime
                 placeat reiciendis non perferendis cumque facilis ab. Unde veritatis eius ullam 
                 natus!</p>

                 <Button text='Explore More' design='btn-info'/>
            
          </div>
       </div>
   
   </>

  )
}

export default Main