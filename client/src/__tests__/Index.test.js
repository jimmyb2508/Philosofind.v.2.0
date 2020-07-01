import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() })

describe('<App />', () => {
  it('renders an App component', () => {
    const wrapper = shallow((
      <App />
    ));
  
    expect(wrapper.exists()).toBeTruthy();
  });
});
