import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppliedJobs } from "../Components/Pages/AppliedJobs/AppliedJobs";
import { CreateOffers } from "../Components/Pages/CreateOffers";
import { Home } from "../Components/Pages/Home";
import { MyOffers } from "../Components/Pages/MyOffers";
import { Navbar } from "../Components/UI/Navbar";

export const DashboardRoutes = () => {
  return (
    <>
      <main className="main">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/applied" element={<AppliedJobs />} />
          <Route path="/create" element={<CreateOffers />} />
          <Route path="/myoffers" element={<MyOffers />} />
        </Routes>
      </main>
    </>
  );
};
