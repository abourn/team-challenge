import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import SignUpForm, {EmailInput, RequiredInput, BirthdayInput, PasswordConfirmationInput} from './TeamSignUp.js';

describe('app will render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});


describe('email input works,', () => {
  
});

describe('name input works,', () => {
    let wrapper;
    var testErrorMsg = "Test error message";

    beforeEach(() => {
        wrapper = shallow(<RequiredInput value={""} errorMessage={testErrorMsg} />);
    });

    it('should return error if there is no text', () => {
        expect(wrapper.find('p').text()).toEqual(testErrorMsg);
    })
});

describe("birthdate works", () => {

}); 

describe("password works", () => {

}); 

describe("confirm password works", () => {

}); 

describe("reset button works", () => {

});