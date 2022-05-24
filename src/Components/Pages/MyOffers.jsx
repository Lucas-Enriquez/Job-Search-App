import React, { useEffect, useState } from "react";
import { JobCards } from "../UI/Job/JobCards";

export const MyOffers = () => {
  const [offersList, setOffersList] = useState([]);

  const getMyOffers = async () => {
    const url =
      "https://backendnodejstzuzulcode.uw.r.appspot.com/api/jobs/employer";
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("userToken"),
        },
      });
      const data = await res.json();
      setOffersList([...data]);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyOffers();
  }, []);

  return (
    <>
      <h1>My Offers</h1>
      <div className="main-grid-container">
        {offersList.map((offer) => {
          return <JobCards key={offer._id} job={offer} />;
        })}
      </div>
    </>
  );
};
