import { Link } from "react-router-dom";

const NamePage = (props) => {
  return (
      <div>
        <h1>Creating Your Account</h1>
        <ul class="steps">
            <li class="step step-primary">Step 1 <br/> Educator Information</li>
            <li class="step ">Step 2 <br/> School Information</li>
            <li class="step">Step 3 <br/> Upload Pictures</li>
            <li class="step">Step 4 <br/> Create Supply List</li>
            <li class="step">Step 5 <br/> Review and Complete</li>
        </ul>
        <p>Let's get started with your personal information</p>
        {/* TODO: bring form to center */}
            <div class="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="" className="input input-bordered w-full max-w-xs"/>
            </div>
            <div class="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Country</span>
                </label>
                <input type="text" placeholder="" className="input input-bordered w-full max-w-xs"/>
            </div>
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