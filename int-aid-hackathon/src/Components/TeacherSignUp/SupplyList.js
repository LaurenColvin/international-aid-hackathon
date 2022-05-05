import { Link } from "react-router-dom";

import CardWrapper from "../layout/CardWrapper";
import SupplyListCard from "./SupplyListCard";

const SupplyListPage = (props) => {
  return (
      <CardWrapper>
          <div>
            <h1 className="text-2xl font-bold text-left p-5 ml-50">Creating Your Account</h1>
            <ul class="steps">
                <li class="step step-primary">Step 1 <br/> Educator Information</li>
                <li class="step step-primary">Step 2 <br/> School Information</li>
                <li class="step step-primary">Step 3 <br/> Upload Pictures</li>
                <li class="step step-primary">Step 4 <br/> Add Your Story</li>
                <li class="step step-primary">Step 5 <br/> Create Supply List</li>
                <li class="step">Step 6 <br/> Review and Complete</li>
            </ul>
            {/*TODO: BRING IN COMPONENT TREE */}
            <div className="flex">
                <div>
                    <p className="text-2xl text-left p-5">Select the supplies you would like added to your list.</p>
                    <SupplyListCard/>
                </div>
                <div class="artboard phone-6 border-black border-2 bg-slate-200 mt-10">
                    <h2>Your List</h2>
                </div>
            </div>

            {/* TODO: bring form to center */}
            <div className="create-user-buttons">
                <Link className="link" to="/sign-up/4">
                <button className="btn  btn-primary">Back</button>
                </Link>
                <Link className="link" to="/sign-up/confirm">
                <button className="btn btn-primary">Next</button>
                </Link> 
            </div>
          </div>
      </CardWrapper>
  )
}

export default SupplyListPage;