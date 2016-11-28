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


describe('name input works,', () => {

});

describe("birthdate works", () => {

}); 

//test1: error message appears if field is blank 
//test2: entering an invalid value causes invalid value message to appears
//test3: entering a valid value does not cause an error message to appears
//test4: changing the input field executes updateParent
//test5: value passed onto its callback is correct
describe("password works", () => {

}); 

describe("confirm password works", () => {

}); 

describe("reset button works", () => {

}); 

  
