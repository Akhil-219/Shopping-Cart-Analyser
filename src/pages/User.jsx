import { Link } from "react-router-dom";
import "../css/User.css";
function User() {
  return (
    <div className="user-info">
      <h2>Already Have an Account?</h2>
      <p>Userame:</p>
      <input type="text" placeholder="Enter your username"></input>
      <br></br>
      <p>Password:</p>
      <input type="text" placeholder="Enter your password"></input>
      <br></br>
      <button className="enter-button">Login</button>
      <h4>Dont have an account?</h4>
      <div className="signup-redirect">
        <p>
          Click on the <Link to="/user/signup">Sign up</Link> to create a
          account
        </p>
      </div>
    </div>
  );
}
export default User;
