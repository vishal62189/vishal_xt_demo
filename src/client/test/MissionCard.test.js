import React from 'react';
import { mount } from 'enzyme';
import MissionCard from "../components/MissionCard";

describe("MissionCard", () => {
  it("should render correctly", () => {
    let missionData = {
      "flightNumber": 1, "missionName": "FalconSat1", "missionId": ["qwer"]
    };
    const wrapper = mount(<MissionCard launch={missionData} />);
    expect(wrapper.find('.missionId').text()).toEqual("qwer");
  });
  it("should render not available for empty missionId", () => {
    let missionData = {
      "flightNumber": 1, "missionName": "FalconSat1", "missionId": []
    };
    const wrapper = mount(<MissionCard launch={missionData} />);
    expect(wrapper.find('.missionId').text()).toEqual("Not Available");

  });
});