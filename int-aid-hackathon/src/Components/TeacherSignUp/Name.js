import { Link } from "react-router-dom";

const NamePage = (props) => {
  return (
      <div>
        <p>Let's get started with your personal information</p>
        <p>Name</p>
        <p>Country</p>
          <div className="create-user-buttons">
              <Link className="link" to="/details">
              <button className="btn  btn-primary">Back</button>
            </Link>
            <Link className="link" to="/school">
              <button className="btn btn-primary">Next</button>
            </Link> 
          </div>
      </div>
  )
}

export default NamePage;