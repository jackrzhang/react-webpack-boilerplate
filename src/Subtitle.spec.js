import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';

import Subtitle from './Subtitle';

describe('<Subtitle />', () => {
  it('renders the subtitle', () => {
    const wrapper = render(<Subtitle />);
    expect(wrapper.text()).to.contain('A simple, powerful starter kit for modern JS applications.');
  });
});
