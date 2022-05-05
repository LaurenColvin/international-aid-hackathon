import React from 'react'
import { Link } from 'react-router-dom'

function Confirm() {
    //TODO: CONFIRMATION PAGE

  return (
    <div>
        <p className="text-6xl">
            confirmation page
        </p>
        <Link to="/teacher-profile">
        <div className='btn btn-primary'>Continue</div>
        </Link>
    </div>
  )
}

export default Confirm