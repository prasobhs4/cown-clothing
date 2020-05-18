import React, { Component } from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import './SignIn.scss'
import {signInWithGoogle} from '../../firebase/Firebase.util';



class SignIn extends Component {
    constructor(props) {
        super(props);
       this.state={
           email:'',
           password:''
       }
    }

    handleClick = (e) => {
          e.preventDefault();
          this.setState({email:'',password:''})
    }
    
    handleChange = (e) => {
        e.preventDefault();
        const {name,value} = e.target
        this.setState({[name]:value})
  }
    render() {
        return (
            <div className='sign-in'>
              <h2>I already have an account</h2>
              <span>SignIn with your email id and password</span>
              <form onSubmit={this.handleClick}>
                  <FormInput handleChange={this.handleChange} name="email" type="email" value={this.state.email} label="Email" required/>
                  <FormInput handleChange={this.handleChange} name="password" type="password" value={this.state.password} label="Password"  required/>
               <div className='button'>  
                  <CustomButton type='submit'>
                    SIGN IN
                  </CustomButton>
                  <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                  SIGN IN WITH GOOGLE
                </CustomButton>
               </div>  
              </form>
            </div>
        );
    }
}



export default SignIn;