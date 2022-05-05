import { useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import CardWrapper from "../layout/CardWrapper";
import { dbClient } from "../../services/dbClient";
import { teacherSubmitFour } from "../../utilities/teacherCreate";

const StoryPage = (props) => {
  const q1Ref = useRef();
  const q2Ref = useRef();
  const q3Ref = useRef();
  let navigate = useNavigate();

  const handleNext = async (e) => {
    e.preventDefault();
    let q1 = q1Ref.current.value;
    let q2 = q2Ref.current.value;
    let q3 = q3Ref.current.value;

    const data = await dbClient.auth.session();
    const id = data.user.id;
    const response = await teacherSubmitFour({ id, q1, q2, q3 });
    console.log("response is");
    console.log(response);
    //TODO: IF ERROR ALERT ERROR, IF RESPONSE NAVIGATE
    return navigate("/sign-up/5");
  };
  //TODO: FIXME: CLASS SHOULD BE CLASSNAME
  
  return (
    <CardWrapper>
      <div>
        <h1 className="text-2xl font-bold text-left p-5 ml-50">
          Creating Your Account
        </h1>
        <ul class="steps">
          <li class="step step-secondary">
            Step 1 <br /> Educator Information
          </li>
          <li class="step step-secondary">
            Step 2 <br /> School Information
          </li>
          <li class="step step-secondary">
            Step 3 <br /> Upload Pictures
          </li>
          <li class="step step-secondary">
            Step 4 <br /> Add Your Story
          </li>
          <li class="step">
            Step 5 <br /> Create Supply List
          </li>
          <li class="step">
            Step 6 <br /> Review and Complete
          </li>
        </ul>
        <p className="text-2xl text-left p-5">
          Tell The World Your Story <br /> Answer any of these questions you
          choose, you can add or change these anytime.
        </p>
        <div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                What do you like best about being a teacher?
              </span>
            </label>
            <textarea
              ref={q1Ref}
              className="textarea textarea-bordered h-24"
              placeholder
              defaultValue={""}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                What's something your students did that made you laugh?
              </span>
            </label>
            <textarea
              ref={q2Ref}
              className="textarea textarea-bordered h-24"
              placeholder
              defaultValue={""}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                What's something you love about your community?
              </span>
            </label>
            <textarea
              ref={q3Ref}
              className="textarea textarea-bordered h-24"
              placeholder
              defaultValue={""}
            />
          </div>
        </div>

        {/* TODO: bring form to center */}
        <div className="create-user-buttons flex justify-between mt-48">
          <Link className="link" to="/photos">
            <button className="btn  btn-accent text-white">Back</button>
          </Link>
          <Link to="/supply-list">Skip This Section</Link>
  
            <button className="btn btn-primary text-white" onClick={(e)=> {handleNext(e)}}>Next</button>
      
        </div>
      </div>
    </CardWrapper>
  );
};

export default StoryPage;
