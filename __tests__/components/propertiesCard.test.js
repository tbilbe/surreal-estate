import React from 'react';
import {
  shallow,
} from 'enzyme';
import PropertiesCard from '../../src/components/properties-card';

describe('Renders the properties card', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow( < PropertiesCard / > );

  });

  it('Renders the properties card', () => {
    expect(wrapper.find('.container').text()).toBe('I am a properties card');
  });
});
