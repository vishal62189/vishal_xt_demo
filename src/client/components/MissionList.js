import React from "react";
import MissionCard from "./MissionCard";

export default function MissionList(props) {
  return props.missions.length > 0 ? (
    props.missions.map((launch, i) => (
      <div key={launch.flightNumber} className="mycol mycol-12 mycol-md-6 mycol-lg-3">
        <MissionCard launch={launch} />
      </div>
    ))
  ) : (
      <h1 className="no-data" >No data found</h1>
    );
}
