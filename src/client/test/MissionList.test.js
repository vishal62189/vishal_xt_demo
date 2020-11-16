import React from 'react';
import { mount } from 'enzyme';
import MissionList from '../components/MissionList';

describe("MissionList", () => {
  it("should render correctly", () => {
    let missionsData = [{
      "flightNumber": 1, "missionName": "FalconSat", "missionId": [],
      "flightNumber": 2, "missionName": "FalconSat2", "missionId": ["qwer"],
    }];
    const wrapper = mount(<MissionList missions={missionsData} />);
    expect(wrapper.find('MissionCard').length).toEqual(1);
  });
  it("should render correctly for No data tag", () => {
    let missionsData = [];
    const wrapper = mount(<MissionList missions={missionsData} />);
    expect(wrapper.find('MissionCard').length).not.toEqual(1);
    expect(wrapper.find('h1.no-data').length).toEqual(1);

  });
});