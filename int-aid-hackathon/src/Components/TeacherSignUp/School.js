import { useRef } from "react";
import { Link } from "react-router-dom";
import { dbClient } from "../../services/dbClient";
import { teacherSubmitTwo } from "../../utilities/teacherCreate";
import {useNavigate} from "react-router";
import CardWrapper from "../layout/CardWrapper";

const SchoolPage = (props) => {
  const schoolNameRef = useRef();
  const countryRef = useRef();
  const schoolAddressRef = useRef();
  const cityRef = useRef();
  const postalRef = useRef();

  const navigate = useNavigate();

  const handleNext = async (e) => {
    e.preventDefault();
    const schoolName = schoolNameRef.current.value  
    const country = countryRef.current.value  
    const schoolAddress = schoolAddressRef.current.value  
    const city = cityRef.current.value  
    const postalCode = postalRef.current.value  

    const data = await dbClient.auth.session();
    const id = data.user.id;
    const response = await teacherSubmitTwo({
      id,
      schoolName,
      country,
      schoolAddress,
      city,
      postalCode,
    });

    console.log("response is");
    console.log(response);
    //TODO: IF ERROR ALERT ERROR, IF RESPONSE NAVIGATE
    return navigate("/sign-up/3");
  };
  //FIXME: CLASS SHOULD BE CLASSNAME!
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
          <li className="step step-secondary">
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
        <p className="text-2xl text-left p-5">Tell Us About Your School Page</p>
        {/* TODO: bring form to center */}
        <div class="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">School Name</span>
          </label>
          <input
          ref={schoolNameRef}
            type="text"
            placeholder=""
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div class="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Country</span>
          </label>
          <input
          ref={countryRef}
            type="text"
            placeholder=""
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div class="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">School Address</span>
          </label>
          <input
          ref={schoolAddressRef}
            type="text"
            placeholder=""
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div class="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">City/Town</span>
          </label>
          <input
          ref={cityRef}
            type="text"
            placeholder=""
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div class="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Postal Code</span>
          </label>
          <input
          ref={postalRef}
            type="text"
            placeholder=""
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        {/*TODO: figure this out! is this really necessary? */ }
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">How old are your students?</span>
          </label>
          <div className="form-control flex">
            <label className="label cursor-pointer">
              <input type="checkbox" checked="" class="checkbox" />
              <span className="label-text">3-5</span>
            </label>
            <label className="label cursor-pointer">
              <input type="checkbox" checked="" class="checkbox" />
              <span className="label-text">6-10</span>
            </label>
            <label className="label cursor-pointer">
              <input type="checkbox" checked="" class="checkbox" />
              <span className="label-text">11-13</span>
            </label>
            <label className="label cursor-pointer">
              <input type="checkbox" checked="" class="checkbox" />
              <span className="label-text">14+</span>
            </label>
          </div>
        </div>
        <div className="create-user-buttons flex justify-between mt-48">
          <Link className="link" to="/name">
            <button className="btn  btn-accent text-white">Back</button>
          </Link>
          <Link className="link" to="/photos">
            <button className="btn btn-primary text-white" onClick={(e) => {handleNext(e)}}>Next</button>
          </Link>
        </div>
      </div>
    </CardWrapper>
  );
};

export default SchoolPage;
