import React, { Component } from 'react';
import SignUpForm from './TeamSignUp';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header> 
          <h1>Sign Up</h1>
          <p>Our service is fun and awesome, buty ou must be 13 years old to join</p>
        </header>
        <SignUpForm />
      </div>
      
    );
  }
}

export default App;
