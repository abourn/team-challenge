import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SignUpForm, {EmailInput, RequiredInput, BirthdayInput, PasswordConfirmationInput} from './TeamSignUp';
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';


describe('app will render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});


describe('email input works,', () => {
  // var wrapper;
  
  //   beforeEach(() => {
  //       wrapper = shallow(<EmailInput />);
  //   })

  it('should warn you if box is blank', () => {
      const wrapper = shallow(<EmailInput value={''}/>)
      console.log(wrapper.find('p').text())
      expect(wrapper.find('p').text()).toEqual('we need to know your email address');
  });

  it('should warn you if the email is invalid', () => {
     const wrapper = shallow(<EmailInput value={'dlafjadls;kfj;l'}/>)
     console.log(wrapper.find('p').text())
      expect(wrapper.find('p').text()).toEqual('this is not a valid email address');
  });

  it('should not be an error because valid value is inputed', () => {
    const wrapper = shallow(<EmailInput value={'dominick@gmail.com'}/>)
     expect(wrapper.find('p').length).toEqual(0);//check length of p, if p is 0 that means there are no errors. 
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

  
