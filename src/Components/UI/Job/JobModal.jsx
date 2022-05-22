import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { applyToJob } from "../../../API/applyToJob";
import { unapplyToJob } from "../../../API/unapplyToJob";
import { JobsContext } from "../../../context/JobsContext";
import { CloseIcon } from "../CloseIcon";
import { JobHeader } from "./JobHeader";

export const JobModal = ({ clickedJob, setClickedJob }) => {
  const { employer, description, title, category, location, salary, _id } =
    clickedJob;
  const { appliedJobs } = useContext(JobsContext);

  const { role } = JSON.parse(localStorage.getItem("userData"));

  const navigate = useNavigate();

  const token = localStorage.getItem("userToken");

  const handleApply = () => {
    if (role !== "applicant") {
      return;
    } else if (role === "applicant") {
      applyToJob(token, _id);
    }
  };

  const handleUnapply = () => {
    unapplyToJob(_id, token);
    navigate("/");
  };

  return (
    <div className="modal-background animate__animated animate__fadeIn animate__faster">
      <div className="job-modal ">
        <div className="job-modal__header">
          <h3>{clickedJob.title}</h3>
        </div>
        <button className="job-modal__close">
          <CloseIcon setClickedJob={setClickedJob} />
        </button>
        <div className="job-modal__body">
          <JobHeader job={clickedJob} />
        </div>

        <div className="modal-job__description">
          <p>{clickedJob.description}</p>
        </div>
        {role === "applicant" ? (
          appliedJobs.includes(clickedJob) ? (
            <button className="job-btn-apply" onClick={handleUnapply}>
              Unapply Job
            </button>
          ) : (
            <button className="job-btn-apply" onClick={handleApply}>
              {" "}
              Apply Job{" "}
            </button>
          )
        ) : (
          <button className="job-btn-apply" disabled>
            {" "}
            Only Applicants can Apply jobs{" "}
          </button>
        )}
      </div>
    </div>
  );
};
