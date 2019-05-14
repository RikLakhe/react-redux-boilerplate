import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Logo from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('Component --- Logo', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Logo />);
  });

  it('should render the ellipse element', () => {
    expect(wrapper.find('img').length).toBe(2);
  });
});
