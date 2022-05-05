import { Link } from "react-router-dom";

import CardWrapper from "../layout/CardWrapper";

const NamePage = (props) => {
  return (
      <CardWrapper>
          <div>
            <h1 className="text-2xl font-bold text-left p-5 ml-50">Creating Your Account</h1>
            <ul class="steps">
                <li class="step step-primary">Step 1 <br/> Educator Information</li>
                <li class="step ">Step 2 <br/> School Information</li>
                <li class="step">Step 3 <br/> Upload Pictures</li>
                <li class="step">Step 4 <br/> Add Your Story</li>
                <li class="step">Step 5 <br/> Create Supply List</li>
                <li class="step">Step 6 <br/> Review and Complete</li>
            </ul>
            <p className="text-2xl text-left p-5">Let's get started with your personal information</p>
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
      </CardWrapper>
  )
}

export default NamePage;