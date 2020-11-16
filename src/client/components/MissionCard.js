import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function MissionCard(props) {
  const { launch } = props;

  return (
    <div className="card p-3">
      <div className="card-image grey lighten-3">
        <LazyLoadImage
          className="h-100 w-100"
          alt="Card image cap"
          src={launch.missionPatch && launch.missionPatch}
        />
      </div>
      <div className="card-body px-0">
        <h6 className="card-text text-primary font-weight-bold">{`${launch.missionName} #${launch.flightNumber}`}</h6>
        <div className="card-text"><span className="font-weight-bold">Mission Ids: </span>
          <span className="missionId text-primary">
            <ul>
              {launch.missionId.length > 0 ? launch.missionId.map(id => {
                return <li key={id}>{id}</li>
              }) : "Not Available"}
            </ul>
          </span>
        </div>
        <p className="card-text"><span className="font-weight-bold">Launch Year: </span>
          <span className="text-primary">
            {launch.launchYear}
          </span>
        </p>
        <p className="card-text"><span className="font-weight-bold">Successful Launch: </span>
          <span className="text-primary">
            {launch.launchSuccess}
          </span>
        </p>
        <p className="card-text"><span className="font-weight-bold">Successfull Landing: </span>
          <span className="text-primary">
            {launch.landSuccess}
          </span>
        </p>
      </div>
    </div>
  );
}
