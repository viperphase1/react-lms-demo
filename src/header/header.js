import Profile from "./profile.js";
import './header.css'

function Header() {
    return (
      <div className="header">

        <h1>SVU - LMS</h1>

        <Profile/>
      </div>
    );
  }
  
  export default Header;