import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { countryNames } from "../../helpers/countryNames";
import useForm from "../../helpers/useForm";

export const CreateOffers = () => {
  const [countries, setcountries] = useState(countryNames);
  const navigate = useNavigate();

  const [values, handleChange] = useForm();

  const { id, name, email, role } = JSON.parse(
    localStorage.getItem("userData")
  );

  const createOffer = async () => {
    try {
      const res = await fetch(
        "https://backendnodejstzuzulcode.uw.r.appspot.com/api/jobs",
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer " + localStorage.getItem("userToken"),
          },
          body: JSON.stringify({
            employer: {
              id: id,
              name: name,
              email: email,
              role: role,
            },
            description: values.description,
            title: values.title,
            category: values.categories.split(','),
            location: {
              country: values.country,
              province: values.province,
              city: values.city,
            },
            salary: values.salary,
          }),
        }
      );
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateOffer = (e) => {
    e.preventDefault();
    createOffer();
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
