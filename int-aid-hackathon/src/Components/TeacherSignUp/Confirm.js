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
        <Link className="link" to="/sign-up/5">
          <button className="btn  btn-primary">Back</button>
        </Link>
    </div>
  )
}

export default Confirm