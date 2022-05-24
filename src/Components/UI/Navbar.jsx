import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";

export const Navbar = () => {
  const [dropDownActive, setDropDownActive] = useState(false);
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);
  const { setIsLogged } = useContext(AuthContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const { name, email, role, id } = JSON.parse(
    localStorage.getItem("userData")
  );

  const handleLogout = () => {
    setIsLogged(false);
    localStorage.clear();
    return;
  };

  let menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (e.target.className === "main") {
        setDropDownActive(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  };

  return (
    <>
    <nav className="navbar">
      <div className="logo">
        <Link to={"/"} className="logo-text">
          <i
            className="fa-solid fa-briefcase"
            style={{ marginRight: ".4em" }}
          ></i>
          <span style={{ color: "#ffffff; font-size: 1.1em" }}>Job</span>
          <span style={{ color: "#eb4028; font-size: 1.1em" }}>Search</span>
        </Link>

        <div className="menubar">
          <ul className="list">
            <li className="list-items">
            <Link to={"/"}>Home</Link>
            </li>
            <li className="list-items">
              { role === 'employer' ? <Link to={"/myoffers"}>My Offers</Link> : <Link to={"/applied"}>Applied Jobs</Link>}
            </li>
          </ul>
        </div>
      </div>

      <div className="user-btn_container">
        {role === 'employer' && <Link className="create-button" to="/create">Create</Link>}
        <i
          className="fa-solid fa-user"
          onClick={() => setDropDownActive(!dropDownActive)}
        ></i>
        {dropDownActive && (
          <div ref={menuRef} className="user-menu menu_active animate__animated" >
            <h3 className="user-email">{name}</h3>
            <hr />
            <ul className="user-menu__list">
              <div>
                <span>{email}</span>
                <br />
                <span>Role: {role}</span>
                <br />
                <span>ID: {id}</span>
                <br />
              </div>
              <div>
                <Link to="/auth/login" onClick={handleLogout}>
                  Log out
                </Link>
                <button className="change-theme" onClick={() => changeTheme()}>
                  Change Theme
                </button>
              </div>
            </ul>
          </div>
        )}
      </div>
      <i className="fa-solid fa-bars" onClick={() => setBurgerMenuActive(!burgerMenuActive)}></i>
    </nav>
      {burgerMenuActive && <div className="burger-menu">
        <Link to={"/"} onClick={() => setBurgerMenuActive(!burgerMenuActive)}>Home</Link>
        { role === 'employer' ? <Link to={"/myoffers"} onClick={() => setBurgerMenuActive(!burgerMenuActive)}>My Offers</Link> : <Link onClick={() => setBurgerMenuActive(!burgerMenuActive)} to={"/applied"}>Applied Jobs</Link>}
        {role === 'employer' && <Link className="create-button" to="/create" onClick={() => setBurgerMenuActive(!burgerMenuActive)}>Create</Link>}
      </div>}
      </>
  );
};
