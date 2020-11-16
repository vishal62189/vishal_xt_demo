import React from "react";

export default function Filter(props) {
  return (
    <div className="mt-1 text-center">
      <h5 className="border-bottom text-bold border-dark text-center pb-1">
        {props.filterGroupName}
      </h5>
      <div className="myrow">
        {props.filters.map((filterName) => (
          <div key={filterName} className="mycol mycol-6 p-1">
            <button
              className="btn-small w-75 bg-success black-text p-0 text-center "
              onClick={() => props.setFilter(filterName)}
            >
              {filterName}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
