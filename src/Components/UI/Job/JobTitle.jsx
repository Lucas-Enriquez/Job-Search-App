import React from "react";

export const JobTitle = ({job}) => {
  return (
    <div className="job-title">
      <h2>{job.title}</h2>
      <h5>{job.employer.name}</h5>
      <div className="category-container">
        {job.category.map((category) => {
          return <span key={category}>{category}</span>;
        })}
      </div>
    </div>
  );
};
