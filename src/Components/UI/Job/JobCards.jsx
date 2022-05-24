import React, { useState } from "react";
import { JobFooter } from "./JobFooter";
import { JobHeader } from "./JobHeader";
import { JobTitle } from "./JobTitle";

export const JobCards = ({ job }) => {



  return (
    <div className="job-card">
      <JobHeader job={job}/>
      <JobTitle job={job}/>
      <JobFooter job={job}/>
    </div>
  );
};
