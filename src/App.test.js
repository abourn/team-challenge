import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {SignUpForm, EmailInput, RequiredInput, BirthdayInput, PasswordConfirmationInput} from './TeamSignUp';

import {shallow} from 'enzyme';

describe('app will render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});


describe('email input works,', () => {
  it('should warn you if box is blank', () => {
      const wrapper = shallow(<EmailInput />);
      expect(wrapper.find('input').simulate('change', {target:{value: ""}})).toEqual('')
  });
});

describe('name input works,', () => {

});

describe("birthdate works", () => {

}); 

describe("password works", () => {

}); 

describe("confirm password works", () => {

}); 

describe("reset button works", () => {

}); 

  
