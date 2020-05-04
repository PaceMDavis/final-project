import React from 'react'


class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  }


  render() {
    return (
      <div class="login-div">
        <form class='login-form'>
          <input 
          class ='input'
          label="username"
          name="username"
          required-id="standard-required"
          placeholder="Username"
          />
          <input 
          class ='input'
          label="password"
          name='password'
          required-id="standard-password-input"
          placeholder="Password"
          />
            <div id="lower">
              <p id="signup-p">Sign Up</p>
              <button type="submit" id="button-login">Submit</button>
            </div>
          
        </form>
      </div>
    )
  }
}

export default LoginForm