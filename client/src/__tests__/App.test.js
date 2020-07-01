import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavBar from '../components/NavBar';
import PhilosofindBox from '../components/PhilosofindBox';
import AncientBox from '../components/AncientBox';
import EnlightenmentBox from '../components/EnlightenmentBox';
import ModernBox from '../components/ModernBox';
import ArtistsBox from '../components/ArtistsBox';
import EntrepreneurBox from '../components/EntrepreneurBox';
import ScientistsBox from '../components/ScientistsBox';
import APIBox from '../components/APIBox';


Enzyme.configure({ adapter: new Adapter() })

describe('renders all components', () => {
  it('renders a navbar component', () => {
    const wrapper = shallow((
      <NavBar />
    ));
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders a container for home page', () => {
    const wrapper = shallow((
      <PhilosofindBox />
    ));
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders a container for ancient page', () => {
    const wrapper = shallow((
      <AncientBox />
    ));
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders a container for enlightenment page', () => {
    const wrapper = shallow((
      <EnlightenmentBox />
    ));
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders a container for modern page', () => {
    const wrapper = shallow((
      <ModernBox />
    ));
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders a container for artists page', () => {
    const wrapper = shallow((
      <ArtistsBox />
    ));
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders a container for entrepreneurs page', () => {
    const wrapper = shallow((
      <EntrepreneurBox />
    ));
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders a container for scientists page', () => {
    const wrapper = shallow((
      <ScientistsBox />
    ));
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders a container for the API page', () => {
    const wrapper = shallow((
      <APIBox />
    ));
    expect(wrapper.exists()).toBeTruthy();
  });
});