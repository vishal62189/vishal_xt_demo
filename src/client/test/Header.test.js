import React from 'react';
import { mount } from 'enzyme';
import Header from '../components/Header';

describe("Header", () => {
  it("should render correctly", () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find('header').length).toEqual(1);
  });
});