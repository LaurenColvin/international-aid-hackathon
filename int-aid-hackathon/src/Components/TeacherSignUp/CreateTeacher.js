import { Link } from "react-router-dom";
import CardWrapper from "../layout/CardWrapper";

const CreateTeacher = (props) => {

  return (
  <CardWrapper>
    <div>
      <h1>Welcome!</h1>
      <h1>Let's create your account so you can start receiving supplies.</h1>
      <div className="create-user-buttons">
        <Link className="link" to="/">
            <button className="btn  btn-primary">Back</button>
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
