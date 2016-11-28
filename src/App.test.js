import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {shallow} from 'enzyme';

import {EmailInput, RequiredInput, BirthdayInput, PasswordConfirmationInput} from './TeamSignUp';
import SignUpForm from './TeamSignUp';

describe('app will render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});


describe('email input works,', () => {
  
});

//Do this 
describe('name input works,', () => {

});

describe("birthdate works", () => {

}); 

describe("password works", () => {

}); 

describe("confirm password works", () => {

}); 

//Do this 
describe("reset button works", () => {

}); 

  
