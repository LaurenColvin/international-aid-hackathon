import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav className="navbar bg-neutral text-neutral-content">
      <Link className="btn btn-ghost normal-case text-xl" to="/">
        <h3>Home</h3>
      </Link>
      <Link className="btn btn-ghost normal-case text-xl" to="/about">
        <h3>About</h3>
      </Link>
      <Link className="btn btn-ghost normal-case text-xl" to="/teacher-profile">
        <h3>Profile</h3>
      </Link>
      <Link className="btn btn-ghost normal-case text-xl" to="/search">
        <h3>Search Listings</h3>
      </Link>
      {/*TODO: USER CONDITIONAL FOR LOGOUT, MAY NEED CONTEXT OR CHECK AUTH ON NAV EVENT*/}
    </nav>
  );
};

export default Nav;
