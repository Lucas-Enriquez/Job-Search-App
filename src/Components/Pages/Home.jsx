import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { JobCards } from "../UI/Job/JobCards";

export const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [jobList, setJobList] = useState([]);

  const [results, setResults] = useState([]);

  const [search, setSearch] = useState("");

  const token = localStorage.getItem("userToken");

  useEffect(() => {
    const getJobs = async () => {
      const url = "https://backendnodejstzuzulcode.uw.r.appspot.com/api/jobs";
      const res = await fetch(url, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      const data = await res.json();
      setJobList((jobList) => [...jobList, ...data]);
    };
    getJobs();
  }, []);
;

  useEffect(() => {
    setResults(jobList);
  }, [jobList]);

  return (
    <>
      <div className="searchbar-container">
        <input
          className="search-input"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search by title, categories, country..."
        />
        <button className="search-button">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <div className="main-grid-container">
        {results
          .filter((val) => {
            if (search == "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(search.toLowerCase()) ||
              val.location?.country
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              val.category.map(category => category).includes(search.toLowerCase())
            ) {
              return val;
            }
          })  
          .map((job) => {
            return <JobCards key={job._id} job={job} />;
          })}
      </div>
    </>
  );
};
