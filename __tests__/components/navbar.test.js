import React from 'react';
import Navbar from '../../src/components/navbar';
import Enzyme from 'enzyme';

it('renders the Navbar', () => {
  const wrapper = Enzyme.shallow( < Navbar / > );
  console.log('logging the wrapper find:', wrapper.debug());
});
