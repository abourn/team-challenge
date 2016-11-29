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

  it('should warn you if box is blank', () => {
      const wrapper = shallow(<EmailInput value={''}/>)
      //console.log(wrapper.find('p').text())
      expect(wrapper.find('p').text()).toEqual('we need to know your email address');
  });

  it('should warn you if the email is invalid', () => {
     const wrapper = shallow(<EmailInput value={'dlafjadls;kfj;l'}/>)
     //console.log(wrapper.find('p').text())
     expect(wrapper.find('p').text()).toEqual('this is not a valid email address');
  });

  it('should not be an error because valid value is inputed', () => {
    const wrapper = shallow(<EmailInput value={'dominick@gmail.com'}/>)
     expect(wrapper.find('p').length).toEqual(0);//check length of p, if p is 0 that means there are no errors. 
  });
  
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
    let wrapper;
    var testErrorMsg = "Test error message";

    beforeEach(() => {
        wrapper = shallow(<RequiredInput value={""} errorMessage={testErrorMsg} />);
    });

    it('should return error if there is no text', () => {
        expect(wrapper.find('p').text()).toEqual(testErrorMsg);
    })
}); 

describe("confirm password", () => {
  it('should return error if passwords do not match', () => {
    const wrapper = shallow(<PasswordConfirmationInput value={"12345"} password={"1234567"}/>)
    expect(wrapper.find('p').text()).toEqual("passwords don't match");
  });

  it('should not return error message if passwords do match', () => {
    const wrapper = shallow(<PasswordConfirmationInput value={"1234559"} password={"1234559"}/>);
    expect(wrapper.find('p').length).toEqual(0); //if length is 0, no error
  });
}); 

describe("reset button works", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<SignUpForm />);
    });

    it("should clear all forms when reset button clicked", () => {
        var allClear = true;
        wrapper.find('#resetButton').simulate('click');
        for (var key in wrapper.state()) {
            if (wrapper.state()[key].value.length > 0) {
                allClear = false;
            }
        }
        expect(allClear).toEqual(true);
    })

});
    

