import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import { years, successFlag } from "../constants";


export default function Sidebar(props) {
  const [yearFilter, setYearFilter] = useState(null);
  const [launchSuccessFilter, setLaunchSuccessFilter] = useState(null);
  const [landSuccessFilter, setLandSuccessFilter] = useState(null);

  useEffect(() => {
    let filterUrlParam = "?";
    if (launchSuccessFilter !== null) {
      filterUrlParam += `&launch_success=${launchSuccessFilter}`;
    }
    if (landSuccessFilter !== null) {
      filterUrlParam += `&land_success=${landSuccessFilter}`;
    }
    if (yearFilter !== null) {
      filterUrlParam += `&launch_year=${yearFilter}`;
    }
    props.searchFilterParam(filterUrlParam);
  }, [yearFilter, launchSuccessFilter, landSuccessFilter]);

  return (
    <aside className="bg-white p-2 mb-2">
      <h3 className="font-weight-bold text-left">Filters</h3>
      <Filter
        filterGroupName="Launch Year"
        setFilter={setYearFilter}
        filters={years}
      />
      <Filter
        filterGroupName="Successful Launch"
        setFilter={setLaunchSuccessFilter}
        filters={successFlag}
      />
      <Filter
        filterGroupName="Successful Landing"
        setFilter={setLandSuccessFilter}
        filters={successFlag}
      />
    </aside>
  );
}