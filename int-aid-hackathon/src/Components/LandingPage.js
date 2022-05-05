import { Link } from "react-router-dom";

const LandingPage = (props) => {
    return (
        <div>
            <div className="hero-image min-h-full h-96 flex content-center justify-center">
                <div className="hero-content text-center">
                    <div className="max-w-xlg">
                        <img className="" src="https://cdn.discordapp.com/attachments/971825989174825001/971825991766925332/Chalkbox_White_1.png" alt="white-logo"></img>
                        <h1 className="text-4xl font-bold text-white">WE HELP EDUCATORS AROUND THE <br/> GLOBE GET THE SUPPLIES THEY NEED</h1>
                    </div>
                </div>
            </div>
            <div className="hero min-h-xlg">
                <div className="hero-content text-center">
                    <div className="max-w-m">
                    <p className="text-2xl py-7 text-black">Need supplies? Want to give supplies? <br/> You're in the right place.</p>
                    <Link className="link" to="/sign-up">
                        <button className="btn  btn-primary text-white mb-3">Let's Get Started!</button>
                    </Link>
                    <Link to="/login"><h6 className="text-black underline">Already Have An Account? Sign In.</h6></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;