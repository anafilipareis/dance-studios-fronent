import { Link } from "react-router-dom";
import { useContext } from "react";                    
import { AuthContext } from "../context/auth.context"; 
import logo from "../assets/logo.png"; // Import your logo image

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext); 

  return (
    <header className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav className="nav-buttons">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {isLoggedIn && (
            <>
              <li>
                <span>Welcome {user.name}</span>
              </li>
              <li>
                <Link to="/dance-classes">Dance Styles</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <button onClick={logOutUser}>Logout</button>
              </li>
            </>
          )}
          {!isLoggedIn && (
            <>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
