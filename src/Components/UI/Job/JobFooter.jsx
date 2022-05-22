import React, { useState } from "react";
import { JobModal } from "./JobModal";

export const JobFooter = ({ job }) => {
  const [clickedJob, setClickedJob] = useState(null);



  const handleSelectJob = (selectedJob) => {
    setClickedJob(selectedJob);
  };
  return (
    <div className="job-footer">
      <div className="job-categories">
        {job.category.map((category) => {
          <span className="job-category">{category}</span>;
        })}
      </div>
      <div className="job-description">
        <p>{job.description}</p>
      </div>
      <button className="job-btn-apply" onClick={() => handleSelectJob(job)}>
        View Job
      </button>
      {clickedJob !== null && <JobModal clickedJob={clickedJob} setClickedJob={setClickedJob}/>}
    </div>
  );
};
