import React, { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { unapplyToJob } from "../../../API/unapplyToJob";
import { JobsContext } from "../../../context/JobsContext";
import { JobCards } from "../../UI/Job/JobCards";
import { JobFooter } from "../../UI/Job/JobFooter";
import { JobHeader } from "../../UI/Job/JobHeader";
import { JobTitle } from "../../UI/Job/JobTitle";

export const AppliedJobs = () => {
  const token = localStorage.getItem("userToken");
  // const { appliedJobs, setAppliedJobs } = useContext(JobsContext);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [clickedJob, setClickedJob] = useState(null);

  const getAppliedJobs = async (appliedJobs) => {
    try {
      const url =
        "https://backendnodejstzuzulcode.uw.r.appspot.com/api/jobs/me";
      const resFetch = await fetch(url, {
        method: "POST",
        headers: {
          authorization: "Bearer " + token,
        },
      });
      const data = await resFetch.json();
      console.log(data);
      if (!data.error) {
       setAppliedJobs([...data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppliedJobs();
  }, []);

  const handleUnapply = (selectedJob) => {
    unapplyToJob(selectedJob._id, token);
    setAppliedJobs(appliedJobs.filter((job) => job._id !== selectedJob._id));
  };

  if (appliedJobs.length === 0) {
    return (
      <h1>We haven't found any applications :(</h1>
    );
  } else {
    return (
      <>
        <h1>Applied Jobs</h1>
        <div className="applied-jobs-container">
          {appliedJobs.map((job) => {
            return (
              <div className="applied-job-card" key={job._id}>
                <JobHeader job={job} />
                <JobTitle job={job} />
                <div className="job-footer">
                  <div className="job-categories">
                    {job.category.map((category) => {
                      <span className="job-category">{category}</span>;
                    })}
                  </div>
                  <div className="job-description">
                    <p>{job.description}</p>
                  </div>
                  <button
                    className="job-btn-apply"
                    onClick={() => handleUnapply(job)}
                  >
                    Unapply Job
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </>
    )
  }
};
