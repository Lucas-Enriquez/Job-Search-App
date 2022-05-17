import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Navbar } from "../UI/Navbar";

export const Home = () => {

  const {theme, setTheme} = useContext(ThemeContext);


  useEffect(() => {
    const fetchJobs = async () => {
      const data = await fetch("../../public/jobs.json");
      console.log(data);
    }

    fetchJobs()
  }, [])

  return (
    <>
      <Navbar />
      <main className="main">
        <h1>Available Jobs</h1>
        <h1>Theme: {theme}</h1>

      </main>
    </>
  );
};
