import React from "react";
import countryColors from "../../../helpers/countryColors";

export const JobHeader = ({job}) => {
  return (
    <div className="job-header">
      <div className="job-country-container" style={{ backgroundColor: `${`${countryColors[job.location.country]}`}`,}}>
        <h4 className="job-country">{job.location.country}</h4>
      </div>
      <span className="job-salary">${job.salary}/mo</span>
    </div>
  );
};
