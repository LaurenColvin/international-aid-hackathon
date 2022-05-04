import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div className="links">
                <Link className="link" to="/">
                    <h3>Home</h3>
                </Link>
                <Link className="link" to="/about">
                    <h3>About</h3>
                </Link>
                <Link className="link" to="/teacher-profile">
                    <h3>Profile</h3>
                </Link>
                <Link className="link" to="/search">
                    <h3>Search Listings</h3>
                </Link>
            </div>
        </nav>
    )
}

export default Nav;