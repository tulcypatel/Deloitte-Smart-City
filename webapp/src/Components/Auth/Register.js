// built by Ian
import React, { Component } from 'react';
import FormErrors from "./FormErrors";
import {Auth} from "aws-amplify";

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    errors: {
      cognito: null,
      blankfield: false,
      passwordmatch: false
    }
  }

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false,
        passwordmatch: false
      }
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    // Form validation
    this.clearErrorState();


    // AWS Cognito integration here
    const{username,email,password} = this.state;
    try {
      const signUpResponse = await Auth.signUp({
        username,
        password,
        attributes:{
          email:email
        }

      });
      console.log(signUpResponse);
      this.props.history.push("/welcome"); // we need to implement a welcome page.
    }catch(error){
      let err = null;
      !error.message? err={"message":error}: err = error;
      this.setState({
        errors:{
          ...this.state.errors,
          cognito:error
        }
      })
    }
  };

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  }

  render() {
    return (
      <div className="bg" style ={{background: 'linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)' ,alignContent:'center',textAlign:'center',paddingTop:'10px' ,color:'white',paddingRight:'10px'}}>
      <section className="section auth">
        <div className="container">
          <h1 style={{fontSize:'40px'}}>Register</h1>
          <FormErrors formerrors={this.state.errors} />

          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <p className="control">
                <input
                  className="input"
                  type="text"
                  id="username"
                  aria-describedby="userNameHelp"
                  placeholder="Enter username"
                  value={this.state.username}
                  onChange={this.onInputChange}
               style={{borderRadius: '4px',margin: '2px 0',padding: '6px 12px'}} />
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onInputChange}
                style={{borderRadius: '4px',margin: '2px 0',padding: '6px 12px'}}/>
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onInputChange}
                style={{borderRadius: '4px',margin: '2px 0',padding: '6px 12px'}}/>
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  id="confirmpassword"
                  placeholder="Confirm password"
                  value={this.state.confirmpassword}
                  onChange={this.onInputChange}
                style={{borderRadius: '4px',margin: '2px 0',padding: '6px 12px'}}/>
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
           
            <div className="field">
              <p className="control">
                <button className="button is-success" style={{backgroundColor:'#4CAF50',color:'white',
                    borderRadius:'4px',border:'none', cursor:'pointer',padding: '0px 20px',margin:'6px 0'}}>
                 <h3 style={{fontType:'bold'}}> Register</h3>
                </button>
              </p>
            </div>
          </form>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
      </section>
     </div>
    );
  }
}

export default Register;
