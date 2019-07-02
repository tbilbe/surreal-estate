/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  shallow,
} from 'enzyme';
import Alert from '../../src/components/alert';

describe('the Alert component', () => {
  it('render the alert presentation component', () => {
    const wrapper = shallow( < Alert message = "Error!" / > );
    expect(wrapper.find('.Alert').text()).toBe('Error!');
  });
}); {
  /* 
  it('renders the alert with success', () => {
    const wrapper = shallow( < Alert message = "Success!"
      success / > );
    expect(wrapper.find('.Alert.success').text()).toBe('Success!');
  }); */
}


it('renders a success message', () => {
  const wrapper = shallow(( < Alert message = "Success!!!"
    success / > ));
  console.log(wrapper.debug()); {
    /* expect(wrapper.find('.Alert.success').text()).toBe('Success!!!'); */ }
});
