import { Link } from "react-router-dom";

import CardWrapper from "../layout/CardWrapper";

const SchoolPage = (props) => {
  return (
      <CardWrapper>
          <div>
            <h1 className="text-2xl font-bold text-left p-5 ml-50">Creating Your Account</h1>
            <ul class="steps">
                <li class="step step-secondary">Step 1 <br/> Educator Information</li>
                <li class="step step-secondary">Step 2 <br/> School Information</li>
                <li class="step">Step 3 <br/> Upload Pictures</li>
                <li class="step">Step 4 <br/> Add Your Story</li>
                <li class="step">Step 5 <br/> Create Supply List</li>
                <li class="step">Step 6 <br/> Review and Complete</li>
            </ul>
            <p className="text-2xl text-left p-5">Tell Us About Your School Page</p>
            {/* TODO: bring form to center */}
                <div class="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">School Name</span>
                    </label>
                    <input type="text" placeholder="" className="input input-bordered w-full max-w-xs"/>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Country</span>
                    </label>
                    <input type="text" placeholder="" className="input input-bordered w-full max-w-xs"/>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">School Address</span>
                    </label>
                    <input type="text" placeholder="" className="input input-bordered w-full max-w-xs"/>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">City/Town</span>
                    </label>
                    <input type="text" placeholder="" className="input input-bordered w-full max-w-xs"/>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Postal Code</span>
                    </label>
                    <input type="text" placeholder="" className="input input-bordered w-full max-w-xs"/>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">How old are your students?</span>
                    </label>
                    <div class="form-control flex">
                        <label class="label cursor-pointer">
                            <input type="checkbox" checked="" class="checkbox"/>
                            <span class="label-text">3-5</span> 
                        </label>
                        <label class="label cursor-pointer">
                            <input type="checkbox" checked="" class="checkbox"/>
                            <span class="label-text">6-10</span> 
                        </label>
                        <label class="label cursor-pointer">
                            <input type="checkbox" checked="" class="checkbox"/>
                            <span class="label-text">11-13</span> 
                        </label>
                        <label class="label cursor-pointer">
                            <input type="checkbox" checked="" class="checkbox"/>
                            <span class="label-text">14+</span> 
                        </label>
                    </div>
                </div>
            <div className="create-user-buttons flex justify-between mt-48">
                <Link className="link" to="/name">
                    <button className="btn  btn-accent text-white">Back</button>
                </Link>
                <Link className="link" to="/photos">
                    <button className="btn btn-primary text-white">Next</button>
                </Link> 
            </div>
          </div>
      </CardWrapper>
  )
}

export default SchoolPage;