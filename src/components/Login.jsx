import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/Constants";

const Login = () => {

const [emailId, setEmailId] = useState("alok@pandey.com");
const [password, setPassword] = useState("Alok@123");
const dispatch = useDispatch();
const navigate = useNavigate();

const handleLogin =  async () => {
  try {
    const res = await axios.post(BASE_URL + "/login", {
    email: emailId,
    password: password
  }, {withCredentials: true});
  console.log(res);
  dispatch(addUser(res.data));
  navigate("/");

  } catch (error) {
    console.log("Error logging in:", error);
  }
}


  return (
    <div className="flex justify-center mt-6">
      <div className="card card-border bg-base-300 w-96">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
              <input type="text" className="input" placeholder="" value={emailId}
              onChange={(e) => setEmailId(e.target.value)} 
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">password</legend>
              <input type="text" className="input" placeholder="" value={password} 
              onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
