// built by Ian

import React, { Component } from 'react';
import FormErrors from "./FormErrors";
import {Auth} from "aws-amplify";
class Login extends Component {
  state = {
    username: "",
    password: "",
    errors: {
      cognito: null,
      blankfield: false
    }
  };

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false
      }
    });
  };

  handleSubmit = async event => {
    event.preventDefault();




    // AWS Cognito integration here

    try {
      const user = await Auth.signIn(this.state.username,this.state.password);

      console.log(user);
      this.props.history.push("/");
    } catch(error) {
      let err = null;
      !error.message? err={"message":error}: err = error;
      this.setState({
        errors:{
          ...this.state.errors,
          cognito:error
        }
      });
    }
  };

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  };

  render() {
    return (
     <div className="bg" style ={{background: 'linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)' ,alignContent:'center',textAlign:'center',paddingTop:'60px' ,color:'white',paddingRight:'10px'}}>
      <section className="section auth">
        <div className="container" >
          <h1 style={{fontSize:'40px'}}>Log In</h1>
           <h2 style={{fontStyle:'italic', fontSize:'20px'}}>Welcome Back</h2>
          <FormErrors formerrors={this.state.errors} />
          
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <p className="control">
                <input
                  className="input"
                  type="text"
                  id="username"
                  aria-describedby="usernameHelp"
                  placeholder="Enter username or email"
                  value={this.state.username}
                  onChange={this.onInputChange}
               style={{borderRadius: '4px',margin: '2px 0',padding: '6px 12px'}} />
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
            <div className="field" >
              <p className="control">
                <a href="/forgotpassword">Forgot password?</a>
              </p>
            </div>
            <div className="field" >
              <p className="control">
                <button className="button is-success" style={{backgroundColor:'#4CAF50',color:'white',
                    borderRadius:'4px',border:'none', cursor:'pointer',padding: '0px 20px',margin:'6px 0'}}>
                 <h3 style={{fontType:'bold'}}> Login</h3>
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

export default Login;