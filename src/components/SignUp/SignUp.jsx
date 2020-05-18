import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth ,createUserProfileDocument} from '../../firebase/Firebase.util';
import './signup.scss';

class SignUp extends Component {
    constructor(props) {
        super(props);
      this.state={
          displayName:'',
          email:'',
          password:'',
          confirmPassword:'',
      }
    }

  handleSubmit = async(e) => {
    e.preventDefault();
    const {displayName,email,password,confirmPassword} = this.state;
    if(password !== confirmPassword){
        alert("Passwords don't match");
        return
    }
    try{
         const {user} = await auth.createUserWithEmailAndPassword(email,password)
         createUserProfileDocument(user,{displayName})
    }
    catch(error){
        console.log(error)
    }

    this.setState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:'',
    })
  }

  handleChange = (e) => 
  {
      const {name,value} = e.target
      console.log(name);
     this.setState({
         [name]:value
        },()=>console.log(this.state))
  }

    render() {
        return (
            <div className='sign-up'>
               <h2 className='title'>I do not have account</h2>
               <span>Signup with your email and password</span>
               <form className='sign-up-form' onSubmit={this.handleSubmit}>
               <FormInput handleChange={this.handleChange} name="displayName" type="text" value={this.state.displayName} label="Name" required/>
               <FormInput handleChange={this.handleChange} name="email" type="email" value={this.state.email} label="Email" required/>
               <FormInput handleChange={this.handleChange} name="password" type="password" value={this.state.password} label="Password"  required/>
               <FormInput handleChange={this.handleChange} name="confirmPassword" type="password" value={this.state.confirmPassword} label="Password"  required/>
               <CustomButton type='submit'>
                 SIGN UP
               </CustomButton>
               </form>
            </div>
        );
    }
}


export default SignUp;