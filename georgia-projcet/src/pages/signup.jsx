import React from 'react';
import { Navigation } from '../components/navigation';
import '../styles/signup.css'

export function Signup() {
  return (
    <div className='SignUppage'>
      <Navigation />
      <div className='formholder'>
        <div className="form">
            <div className="header">Sign In</div>
            <div className="inputs">
            <input placeholder="Email" className="input" type="text" />
            <input placeholder="Password" className="input" type="password" />
            <div className="checkbox-container">
                <label className="checkbox" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" />
                </label>
                <label htmlFor="checkbox" className="checkbox-text">Remember me</label>
            </div>
            <button className="signin-btn">Submit</button>
            <a className="forget" href="/">Forget password?</a>
            <p className="signup-link">Don't have an account? <a href="/">Sign up</a></p>
            </div>
        </div>
      </div>
    </div>
  );
}

