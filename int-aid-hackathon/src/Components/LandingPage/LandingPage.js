import { Link } from "react-router-dom";

const LandingPage = (props) => {
    return (
        <div>
            <h1>Landing Page</h1>
            <div className="create-user-buttons">
                <Link className="link" to="/create-teacher">
                    <button>Create Teacher</button>
                </Link>
                <Link className="link" to="/create-donor">
                    <button>Create Donor</button>
                </Link> 
            </div>
        </div>
    )
}

export default LandingPage;