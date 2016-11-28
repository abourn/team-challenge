import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow, mount} from 'enzyme';
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

describe("birthdate validation works", () => {
    it ('shows correct error msg for empty brithday', () => {
      const wrapper = shallow(<BirthdayInput value={""}/>)
      expect(wrapper.find('p').text()).toEqual("we need to know your birthdate");
    });
     
    it('shows correct error msg for those younger than 13', () => {
      const wrapper = shallow(<BirthdayInput value={"10/10/2016"}/>)
      expect(wrapper.find('p').text()).toEqual("sorry, you must be at least 13 to sign up");
    });

    it('shows correct error msg for those older than 13', () => {
      const wrapper = shallow(<BirthdayInput value={"10/10/1996"}/>)
      expect(wrapper.find('p').length).toEqual(0);
    });
    
    it('shows correct error msg for invalid dates', () => {
      const wrapper = shallow(<BirthdayInput value={"today"}/>)
      expect(wrapper.find('p').text()).toEqual("that isn't a valid date");
    });
}); 

describe("password works", () => {

}); 

describe("confirm password works", () => {

}); 

describe("reset button works", () => {

});