import { Link } from "react-router-dom";
import CardWrapper from "../layout/CardWrapper";

const CreateTeacher = (props) => {

  return (
  <CardWrapper>
    <div>
      <div className="hero min-h-xlg">
        <div className="hero-content text-center">
          <div className="max-w-m">
            <h1 className="text-5xl font-bold text-primary text-left mt-40">WELCOME!</h1>
              <p className="text-4xl py-7 text-black mb-11">Let's create your account so you can start receiving supplies.</p>    
            </div>
        </div>
      </div>
      <div className="create-user-buttons flex justify-between mt-48">
        <Link className="link" to="/">
            <button className="btn  btn-accent text-white">Back</button>
        </Link>
        <Link className="link" to="/details">
            <button className="btn btn-primary">Next</button>
        </Link> 
      </div>
    </div>
  </CardWrapper>
  );
};

export default CreateTeacher;
