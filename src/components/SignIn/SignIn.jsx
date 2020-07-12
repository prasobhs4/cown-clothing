import React, { useState } from "react";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import "./SignIn.scss";
import { fetchGmailStart, fetchEmailStart } from "../Redux/User/userAction";
import { connect } from "react-redux";

const SignIn = ({ fetchEmailStart, fetchGmailStart }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = credentials;

  const handleClick = async (e) => {
    e.preventDefault();

    fetchEmailStart({ email, password });
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>SignIn with your email id and password</span>
      <form onSubmit={handleClick}>
        <FormInput
          handleChange={handleChange}
          name="email"
          type="email"
          value={email}
          label="Email"
          required
        />
        <FormInput
          handleChange={handleChange}
          name="password"
          type="password"
          value={password}
          label="Password"
          required
        />
        <div className="button">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton onClick={fetchGmailStart} isGoogleSignIn>
            SIGN IN WITH GOOGLE
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { fetchGmailStart, fetchEmailStart })(SignIn);
