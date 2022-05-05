import { Link } from "react-router-dom";

const DetailPage = (props) => {
  return (
      <div>
        <p>Enter your information</p>
        <p>Customize your profile</p>
        <p>Choose your items</p>
          <h1>It's that easy!</h1>
          <div className="create-user-buttons">
              <Link className="link" to="/create-teacher">
              <button className="btn  btn-primary">Back</button>
            </Link>
            <Link className="link" to="/name">
              <button className="btn btn-primary">Next</button>
            </Link> 
          </div>
      </div>
  )
}

export default DetailPage;