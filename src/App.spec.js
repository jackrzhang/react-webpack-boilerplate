import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';

import App from './App';
import Subtitle from './Subtitle';

describe('<App />', () => {
  it('renders a <Subtitle /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Subtitle)).to.have.length(1);
  });

  it('calls componentDidMount', () => {
    sinon.spy(App.prototype, 'componentDidMount');
    mount(<App />);
    expect(App.prototype.componentDidMount).to.have.property('callCount', 1);
    App.prototype.componentDidMount.restore();
  });

  it('renders the title', () => {
    const wrapper = render(<App />);
    expect(wrapper.text()).to.contain('React Webpack Boilerplate');
  });
});
