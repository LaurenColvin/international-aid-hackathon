import { Link } from "react-router-dom";

const LandingPage = (props) => {
    return (
        <div>
            <div className="hero min-h-full bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-xlg">
                    <h1 className="text-4xl font-bold">WE HELP EDUCATORS AROUND THE <br/> GLOBE GET THE SUPPLIES THEY NEED</h1>
                    </div>
                </div>
            </div>
            <div className="hero min-h-xlg bg-white-200">
                <div className="hero-content text-center">
                    <div className="max-w-m">
                    <p className="text-2xl py-7">Need supplies? Want to give supplies? <br/> You're in the right place.</p>
                    <Link className="link" to="/sign-up">
                        <button className="btn  btn-primary">Let's Get Started!</button>
                    </Link>
                    <Link to="/login"><h6>Already Have An Account? Sign In.</h6></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;