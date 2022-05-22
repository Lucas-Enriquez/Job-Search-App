import React, { useContext, useEffect } from "react";
import { JobsContext } from "../../../context/JobsContext";
import { JobCards } from "../../UI/Job/JobCards";

export const AppliedJobs = () => {
  const token = localStorage.getItem("userToken");
  const { appliedJobs, setAppliedJobs } = useContext(JobsContext);

  const getAppliedJobs = async () => {
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
      await setAppliedJobs([...data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppliedJobs();
  }, []);

  return (
    <>
      <h1>Applied Jobs</h1>
      <div className="main-grid-container">
        {appliedJobs.map((job) => {
          return <JobCards key={job._id} job={job} />;
        })}
      </div>
    </>
  );
};
