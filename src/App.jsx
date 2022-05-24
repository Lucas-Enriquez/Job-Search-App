import { useEffect, useState } from "react";
import "./scss/styles.scss";
import { AuthContext } from "./context/AuthContext";
import { AppRouter } from "./Routes/AppRouter";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const navigate = useNavigate();



  const [registerValues, setRegisterValues] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const [theme, setTheme] = useState("light");

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("userToken") !== null) {
      setIsLogged(true);
      // navigate("/");
    }
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else if (theme === "light") {
      document.body.classList.remove("dark-mode");
    }
  }, [theme, isLogged]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <AuthContext.Provider
        value={{ registerValues, setRegisterValues, isLogged, setIsLogged }}
      >
        <AppRouter />
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
