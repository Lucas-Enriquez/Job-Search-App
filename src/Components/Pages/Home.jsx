import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { JobCards } from "../UI/Job/JobCards";

export const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [jobList, setJobList] = useState([]);
  const token = localStorage.getItem("userToken");

  const url = "https://backendnodejstzuzulcode.uw.r.appspot.com/api/jobs";
  const getJobs = async () => {
    const res = await fetch(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const data = await res.json();
    setJobList([...data]);
  };

  useEffect(() => {
    getJobs();
  }, []);



  return (
    <>
        <h1>Available Jobs</h1>
        <div className="main-grid-container">
          {jobList.map((job) => {
            return (
              <JobCards key={job._id} job={job}/>
            );
          })}
        </div>
    </>
  );
};
