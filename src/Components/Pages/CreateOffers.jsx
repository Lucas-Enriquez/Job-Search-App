import React, { useState } from "react";
import { countryNames } from "../../helpers/countryNames";
import useForm from "../../helpers/useForm";

export const CreateOffers = () => {
  const [countries, setcountries] = useState(countryNames);

  const [values, handleChange] = useForm();
  
  const { id, name, email, role } = JSON.parse(
    localStorage.getItem("userData")
  );
  // console.log(values.categories.split(","));


  const handleCreateOffer = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <form className="login-form" onSubmit={handleCreateOffer}>
        <h1>Create an offer</h1>

        <input
          value={values.title || ""}
          onChange={handleChange}
          name="title"
          placeholder="Title of the job offer"
          type="text"
        />
        <input
          value={values.description || ""}
          onChange={handleChange}
          name="description"
          placeholder="Description"
          type="text"
        />
        <input
          value={values.categories || ""}
          onChange={handleChange}
          name="categories"
          placeholder="Categories (separated by commas)"
          type="text"
        />
        <label className="offer-label">Location</label>
        <select
          value={values.country || ""}
          onChange={handleChange}
          name="country"
        >
          {countries.map((country, id) => (
            <option key={id} value={country}>
              {country}
            </option>
          ))}
        </select>
        <input
          value={values.province || ""}
          onChange={handleChange}
          name="province"
          placeholder="Province"
        />
        <input
          value={values.city || ""}
          onChange={handleChange}
          name="city"
          placeholder="City"
        />
        <label className="offer-label">Salary</label>
        <input
          value={values.salary || ""}
          name="salary"
          onChange={handleChange}
          placeholder="e.g: 10000"
          type="text"
        />

        <button className="signup-btn" type="submit">
          Create Offer
        </button>
      </form>
    </div>
  );
};
