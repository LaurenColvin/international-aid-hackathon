import { Link } from "react-router-dom";

const DetailPage = (props) => {
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
            <Link className="link" to="/name">
                <button className="btn btn-primary text-white">Next</button>
            </Link> 
          </div>
      </div>
  )
}

export default DetailPage;