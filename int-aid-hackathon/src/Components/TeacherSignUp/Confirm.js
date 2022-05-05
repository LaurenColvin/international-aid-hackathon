import { Link } from "react-router-dom";

import CardWrapper from "../layout/CardWrapper";
import SupplyListCard from "./SupplyListCard";

const ConfirmPage = (props) => {
  return (
      <CardWrapper>
          <div>
            <h1 className="text-2xl font-bold text-left p-6 ml-50">Creating Your Account</h1>
            <ul class="steps">
                <li class="step step-primary">Step 1 <br/> Educator Information</li>
                <li class="step step-primary">Step 2 <br/> School Information</li>
                <li class="step step-primary">Step 3 <br/> Upload Pictures</li>
                <li class="step step-primary">Step 4 <br/> Add Your Story</li>
                <li class="step step-primary">Step 5 <br/> Create Supply List</li>
                <li class="step step-primary">Step 6 <br/> Review and Complete</li>
            </ul>
          </div>
          <div>
            <h1>Is all of this information correct?</h1>
            <p>Name: </p>
            <p>Email: </p>
            <p>School: </p>
            <p>Students: </p>
            <p>Photos: </p>
            <div className="flex flex-row">
                <div className="bg-slate-200 m-10">Image</div>
                <div className="bg-slate-200 m-10">Image</div>
                <div className="bg-slate-200 m-10">Image</div>
                <div className="bg-slate-200 m-10">Image</div>
                <div className="bg-slate-200 m-10">Image</div>
            </div>
            <p>Your Story: </p>
            <p>Supplies You Need: </p>
          </div>

            {/* TODO: bring form to center */}
            <div className="create-user-buttons">
                <Link className="link" to="/supply-list">
                <button className="btn  btn-primary">Back</button>
                </Link>
                <Link className="link" to="/profile">
                <button className="btn btn-primary">Complete Profile</button>
                </Link> 
            </div>
      </CardWrapper>
  )
}

export default ConfirmPage;