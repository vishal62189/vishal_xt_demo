import React from 'react';
import { mount } from 'enzyme';
import Footer from '../components/Footer';

describe("Footer", () => {
  it("should render correctly", () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.find('footer').length).toEqual(1);
  });
});