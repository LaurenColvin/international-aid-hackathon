import { useRef } from "react";
import { dbClient } from "../services/dbClient";
import { logIn } from "../utilities/logIn";
import CardWrapper from "./layout/CardWrapper";

const CreateTeacher = (props) => {

  //TODO: determine if state or refs is ideal. Component should unmount on nav, removing ref from the dom, so it *shouldn't* be exposed.
  const emailRef = useRef();
  const passRef = useRef();

  //handle click
  const handleClick = async (event) => {
    event.preventDefault();
    let email = emailRef.current.value
    let password = passRef.current.value
    // destructure return from auth signup method
    const { user, session, error } = await dbClient.auth.signUp({
      email: email,
      password: password 
    });

    //TODO: error handling, pending ui?, navigation
    if (user) {
      return console.log(session);
    } else {
      return console.error(error, 401);
    }
  };

  return (
  <CardWrapper>
        <p>
          {/* TODO: validate input, feedback (snackbar or alert) */}
          <h1>Let's Get Started</h1>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input ref={emailRef} type="text" placeholder="" className="input input-bordered w-full max-w-xs"/>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input ref={passRef} type="text" placeholder="" className="input input-bordered w-full max-w-xs"/>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input type="radio" name="radio-6" className="radio checked:bg-black-500" checked />
              <span className="label-text">I am a Teacher</span> 
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input type="radio" name="radio-6" className="radio checked:bg-black-500" checked />
              <span className="label-text">I am a Donor</span> 
            </label>
          </div>
          <button className="btn btn-primary" onClick={(e) => handleClick(e)}>Create Account</button>
        </p>
  </CardWrapper>
  );
};

export default CreateTeacher;
