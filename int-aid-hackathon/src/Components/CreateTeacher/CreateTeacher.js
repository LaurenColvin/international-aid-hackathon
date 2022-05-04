import { useRef } from "react";
import { dbClient } from "../../services/dbClient";
import { logIn } from "../../utilities/logIn";

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
    <div>
      <section className="w-96 h-96 bg-cyan-300">
        <p>
          {/* TODO: validate input, feedback (snackbar or alert) */}
          <input ref={emailRef} type="text" placeholder="email" />

          <input ref={passRef} type="text" placeholder="pass" />

          <button onClick={(e) => handleClick(e)}>Submit</button>
        </p>
      </section>
    </div>
  );
};

export default CreateTeacher;
