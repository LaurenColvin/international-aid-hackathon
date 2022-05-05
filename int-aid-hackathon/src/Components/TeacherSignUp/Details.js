import { Link } from "react-router-dom";
import { useEffect } from "react";
import { dbClient } from "../../services/dbClient";

const DetailPage = (props) => {
  useEffect(() => {
    const data = dbClient.auth.session()
    let id = data.user.id
    console.log(id)
    return console.log(id)
  },[])
  
  return (
      <div>
        <p>Enter your information</p>
        <p>Customize your profile</p>
        <p>Choose your items</p>
          <h1>It's that easy!</h1>
          <div className="create-user-buttons flex justify-between mt-48">
            <Link className="link" to="/create-teacher">
                <button className="btn  btn-accent text-white">Back</button>
            </Link>
            <Link className="link" to="/sign-up/1">
                <button className="btn btn-primary text-white">Next</button>
            </Link> 
          </div>
      </div>
  )
}

export default DetailPage;