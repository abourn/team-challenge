import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import sinon from 'sinon';

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
    var wrapper;
    beforeEach(() => {
        wrapper = shallow(<BirthdayInput />);
    })

    var validate = sinon.spy
    wrapper.find('input').simulate('change', {target: {value: "101"}})

}); 

describe("password works", () => {

}); 

describe("confirm password works", () => {

}); 

describe("reset button works", () => {

}); 

  
