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

// tests email field
describe('email input works,', () => {
    
  // when email is blank, expected to display "we need to know your email address"  
  it('should warn you if box is blank', () => {
      const wrapper = shallow(<EmailInput value={''}/>)
      expect(wrapper.find('p').text()).toEqual('we need to know your email address');
  });

  // when email is not in standard form, expected to display "this is not a valid email address"
  it('should warn you if the email is invalid', () => {
     const wrapper = shallow(<EmailInput value={'dlafjadls;kfj;l'}/>)
      expect(wrapper.find('p').text()).toEqual('this is not a valid email address');
  });

  // when email is in the standard format, expected to not display any errors
  it('should not be an error because valid value is inputed', () => {
    const wrapper = shallow(<EmailInput value={'dominick@gmail.com'}/>)
    expect(wrapper.find('p').length).toEqual(0);//check length of p, if p is 0 that means there are no errors. 
  });
});

// test the name input
describe('name input works,', () => {
    //an error message for us to check
    var testErrorMsg = "Test error message";

    // expect to return testErrorMsg when there is no name
    it('should return error if there is no text', () => {
        const wrapper = shallow(<RequiredInput value={""} errorMessage={testErrorMsg} />);
        expect(wrapper.find('p').text()).toEqual(testErrorMsg);
    })

    // expect to not return error when there is some input for name
    it('should not return error if there is text', () => {
        const wrapper = shallow(<RequiredInput value={"works"} />);
        expect(wrapper.find('p').length).toEqual(0);
    })
});


describe("birthdate validation works", () => {

    // shows "we need to know your birthdate" msg when no value is passed
    it ('shows correct error msg for empty brithday', () => {
      const wrapper = shallow(<BirthdayInput value={""}/>)
      expect(wrapper.find('p').text()).toEqual("we need to know your birthdate");
    });

    // shows "sorry, you must be at least 13 to sign up" when birthdate is for someone younger than 13 
    it('shows correct error msg for those younger than 13', () => {
      const wrapper = shallow(<BirthdayInput value={"10/10/2016"}/>)
      expect(wrapper.find('p').text()).toEqual("sorry, you must be at least 13 to sign up");
    });

    // shows no error msg when the birthdate is for someone old enough
    it('shows correct error msg for those older than 13', () => {
      const wrapper = shallow(<BirthdayInput value={"10/10/1996"}/>)
      expect(wrapper.find('p').length).toEqual(0);
    });

    // shows "that isn't a valid date" when passed in a non JavaScript date format
    it('shows correct error msg for invalid dates', () => {
      const wrapper = shallow(<BirthdayInput value={"today"}/>)
      expect(wrapper.find('p').text()).toEqual("that isn't a valid date");
    });
}); 

describe("password works", () => {
    let wrapper;
    var testErrorMsg = "Test error message";

    // shallow renders a RequiredInput component with a blank string
    // then expects the error to be equal to the "Test error message"
    it('should return error if there is no text', () => {
        wrapper = shallow(<RequiredInput value={""} errorMessage={testErrorMsg} />);
        expect(wrapper.find('p').text()).toEqual(testErrorMsg);
    })

    // expects there to not be an error message when passed any valid string
    it('should not return an error message if password is valid', () => {
        wrapper = shallow(<RequiredInput value={"test"}/>);
        expect(wrapper.find('p').length).toEqual(0);
    });
}); 

describe("confirm password", () => {

  // expects error message to be "passwords don't match" when the passwords supplied don't match  
  it('should return error if passwords do not match', () => {
    const wrapper = shallow(<PasswordConfirmationInput value={"12345"} password={"1234567"}/>)
    expect(wrapper.find('p').text()).toEqual("passwords don't match");
  });

  // expects no error messages when the password and password confirmation are equal
  it('should not return error message if passwords do match', () => {
    const wrapper = shallow(<PasswordConfirmationInput value={"1234559"} password={"1234559"}/>);
    expect(wrapper.find('p').length).toEqual(0); //if length is 0, no error
  });
}); 

describe("reset button works", () => {

    // mounts the SignUpForm component before each test
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<SignUpForm />);
    });

    // checks the length of the value each key in the SignUpForms state, and expects
    // each length to be 0.  
    it("should clear all forms when reset button clicked", () => {
        var allClear = true;
        wrapper.find('#resetButton').simulate('click');
        for (var key in wrapper.state()) {
            if (key !== "submitSuccess" && wrapper.state()[key].value.length > 0) {
                allClear = false;
            }
        }
        expect(allClear).toEqual(true);
    })

});
    
describe("submit button works", () => {
    // expects the submit button to be enabled when all inputs are valid 
    it('enables submit button when all inputs are valid', () => {
      const wrapper = mount(<SignUpForm />);
      wrapper.setState({
        email:{value:'dominick@gmail.com',valid:true}, 
        name:{value:'dominick',valid:true},
        dob:{value:'10/10/1996',valid:true},
        password:{value:'pass123',valid:true},
        passwordConf:{value:'pass123',valid:true}
      })
      expect(wrapper.find('#submitButton').props().disabled).toEqual(false);
   });

  // expects the submit button to be disabled when inputs are invalid 
  it('disables submit button when some inputs are invalid', () => {
      const wrapper = mount(<SignUpForm />);
      wrapper.setState({
        email:{value:'',valid:false}, 
        name:{value:'',valid:false},
        dob:{value:'',valid:false},
        password:{value:'',valid:false},
        passwordConf:{value:'',valid:false}
      })
      expect(wrapper.find('#submitButton').props().disabled).toEqual(true);
   });
   
   // expects that submitting valid information will cause alert modal to appear
   it('shows submitted alert when all inputs are valid and button is clicked', () => {
        const wrapper = mount(<SignUpForm />);
        wrapper.setState({
            email:{value:'dominick@gmail.com',valid:true}, 
            name:{value:'dominick',valid:true},
            dob:{value:'10/10/1996',valid:true},
            password:{value:'pass123',valid:true},
            passwordConf:{value:'pass123',valid:true}
        })
        wrapper.find('#submitButton').simulate('click');
       expect(wrapper.find('#success').text()).toEqual("Successfully Submitted!");
   });
   
});

describe("parent callback works when updating validity in SignUpForm state", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<SignUpForm />);
    });

    it("invalid input on EmailInput should update state of SignUpForm accordingly", () => {
        wrapper.find('EmailInput').find('input').simulate('change', {target:{value:'adsf'}});
        expect(wrapper.state().email.valid).toEqual(false);
    })

    it("valid input on EmailInput should update state of SignUpForm accordingly", () => {
        wrapper.find('EmailInput').find('input').simulate('change', {target:{value:'adam@gmail.com'}});
        expect(wrapper.state().email.valid).toEqual(true);
    })
});

describe("parent callback is actually called", () => {
  it("should have the same value as the child", () => {
    var spyCallback = sinon.spy(SignUpForm.prototype, 'updateState');
    
    const wrapper = mount(<App />);
    var testDate = '10/10/2016'
    wrapper.find('#dob').simulate('change', {target:{value:testDate}});

    expect(spyCallback.getCall(0).args[0].dob.value).toEqual(testDate);
  });
});
