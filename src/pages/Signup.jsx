import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  function handleSubmit() {
    if (userPassword !== confirmPassword) {
      alert("Please check your password");
      return;
    }

    alert("SignUp Successfull");
    navigate("/user");
  }
  const [userName, setUserName] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input
          type="text"
          placeholder="Enter your Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <br></br>
        <p>Phone Number</p>
        <input
          type="number"
          placeholder="Enter your number"
          value={userPhoneNumber}
          onChange={(e) => setUserPhoneNumber(e.target.value)}
        ></input>
        <br></br>
        <p>Mail</p>
        <input type="text" placeholder="Enter your mail eg:hi@mail.com"></input>
        <br></br>
        <p>SetPassword</p>
        <input
          type="password"
          placeholder="Enter your password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        ></input>
        <br></br>
        <p>ConfirmPassword</p>
        <input
          type="password"
          placeholder="Enter your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>
        <button type="submit" className="search-button">
          Submit
        </button>
      </form>
    </div>
  );
}
export default SignUp;
