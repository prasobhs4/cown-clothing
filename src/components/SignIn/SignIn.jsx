import React, { Component } from "react";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import "./SignIn.scss";
import { fetchGmailStart, fetchEmailStart } from "../Redux/User/userAction";
import { connect } from "react-redux";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleClick = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { fetchEmailStart } = this.props;
    fetchEmailStart({ email, password });
    console.log(email, password);

    // try {
    //   auth.signInWithEmailAndPassword(email, password);
    //   this.setState({ email: "", password: "" });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { fetchGmailStart } = this.props;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>SignIn with your email id and password</span>
        <form onSubmit={this.handleClick}>
          <FormInput
            handleChange={this.handleChange}
            name="email"
            type="email"
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            handleChange={this.handleChange}
            name="password"
            type="password"
            value={this.state.password}
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
  }
}

export default connect(null, { fetchGmailStart, fetchEmailStart })(SignIn);
