import { useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { dbClient } from "../../services/dbClient";
import { teacherSubmitOne } from "../../utilities/teacherCreate";

import CardWrapper from "../layout/CardWrapper";

const NamePage = (props) => {
  const nameRef = useRef();
  const countryRef = useRef();
  let navigate = useNavigate();

  const handleNext = async (e) => {
    e.preventDefault();
    let name = nameRef.current.value;
    let country = countryRef.current;
    const data = await dbClient.auth.session();
    const id = data.user.id;
    const response = await teacherSubmitOne({ id, name, country });
    console.log("response is");
    console.log(response);
    //TODO: IF ERROR ALERT ERROR, IF RESPONSE NAVIGATE
    return navigate("/sign-up/2");
  };
  return (
    <CardWrapper>
      <div>
        <h1 className="text-2xl font-bold text-left p-5 ml-50">
          Creating Your Account
        </h1>
        <ul className="steps">
          <li className="step step-secondary">
            Step 1 <br /> Educator Information
          </li>
          <li className="step ">
            Step 2 <br /> School Information
          </li>
          <li className="step">
            Step 3 <br /> Upload Pictures
          </li>
          <li className="step">
            Step 4 <br /> Add Your Story
          </li>
          <li className="step">
            Step 5 <br /> Create Supply List
          </li>
          <li className="step">
            Step 6 <br /> Review and Complete
          </li>
        </ul>

        <p className="text-2xl text-left p-5">
          Let's get started with your personal information
        </p>
        {/* TODO: bring form to center */}
        <div class="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            ref={nameRef}
            placeholder=""
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div class="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Country</span>
          </label>
          <input
            type="text"
            ref={countryRef}
            placeholder=""
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="create-user-buttons flex justify-between mt-48">
          <Link className="link" to="/details">
            <button className="btn  btn-accent text-white">Back</button>
          </Link>

          <button
            className="btn btn-primary text-white"
            onClick={(e) => {
              handleNext(e);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </CardWrapper>
  );
};

export default NamePage;
