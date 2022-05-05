import React from 'react'

function CardWrapper({children}) {
  return (
   <div className='flex justify-center'>
       {children}
   </div>
  )
}

export default CardWrapper