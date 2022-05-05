import { Link } from "react-router-dom";

import CardWrapper from "../layout/CardWrapper";

const StoryPage = (props) => {
  return (
      <CardWrapper>
          <div>
            <h1 className="text-2xl font-bold text-left p-5 ml-50">Creating Your Account</h1>
            <ul class="steps">
                <li class="step step-secondary">Step 1 <br/> Educator Information</li>
                <li class="step step-secondary">Step 2 <br/> School Information</li>
                <li class="step step-secondary">Step 3 <br/> Upload Pictures</li>
                <li class="step step-secondary">Step 4 <br/> Add Your Story</li>
                <li class="step">Step 5 <br/> Create Supply List</li>
                <li class="step">Step 6 <br/> Review and Complete</li>
            </ul>
            <p className="text-2xl text-left p-5">Tell The World Your Story <br/> Answer any of these questions you choose, you can add or change these anytime.</p>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">What do you like best about being a teacher?</span>
                </label> 
                <textarea class="textarea textarea-bordered h-24" placeholder=""></textarea>
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">What's something your students did that made you laugh?</span>
                </label> 
                <textarea class="textarea textarea-bordered h-24" placeholder=""></textarea>
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">What's something you love about your community?</span>
                </label> 
                <textarea class="textarea textarea-bordered h-24" placeholder=""></textarea>
            </div>
            {/* TODO: bring form to center */}
            <div className="create-user-buttons flex justify-between mt-48">
                <Link className="link" to="/photos">
                    <button className="btn  btn-accent text-white">Back</button>
                </Link>
                <Link to="/supply-list">Skip This Section</Link>
                <Link className="link" to="/supply-list">
                    <button className="btn btn-primary text-white">Next</button>
                </Link> 
            </div>
          </div>
      </CardWrapper>
  )
}

export default StoryPage;