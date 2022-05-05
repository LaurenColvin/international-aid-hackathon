import { Link } from "react-router-dom";
import { useEffect } from "react";
import { dbClient } from "../../services/dbClient";

import CardWrapper from "../layout/CardWrapper";

const DetailPage = (props) => {
  useEffect(() => {
    const data = dbClient.auth.session()
    let id = data.user.id
    console.log(id)
    return console.log(id)
  },[])
  
  return (
    <CardWrapper>
      <div>
        <div className="flex justify-evenly mt-28">
          <div>
            <img className="w-xl h-xl m-11" src="https://static.thenounproject.com/png/420338-200.png" alt="information-icon"></img>
            <p className="text-center text-xl">Enter your information</p>
          </div>
          <div>
          <img className="w-xl h-xl m-11" src="https://static.thenounproject.com/png/420338-200.png" alt="information-icon"></img>
            <p className="text-center text-xl">Customize your profile</p>
          </div>
          <div>
          <img className="w-xl h-xl m-11" src="https://static.thenounproject.com/png/420338-200.png" alt="information-icon"></img>
          <p className="text-center text-xl">Choose your items</p> 
          </div>
        </div>
        <div className="create-user-buttons flex justify-between mt-48">
          <Link className="link" to="/create-teacher">
              <button className="btn btn-wide btn-accent text-white">Back</button>
          </Link>
          <Link className="link" to="/sign-up/1">
              <button className="btn btn-wide btn-primary text-white">Next</button>
          </Link> 
        </div>
      </div>
    </CardWrapper>
  )
}

export default DetailPage;