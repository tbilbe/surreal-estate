import React from 'react';
import { shallow } from 'enzyme';

import PropertiesCard from '../../src/components/properties-card';

it('Renders the properties card', () => {
  const wrapper = shallow(<PropertiesCard />);
  expect(wrapper.find('.container').text()).toBe('I am a properties card');
});
