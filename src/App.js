import { useState, useEffect } from "react";
// Step 1: Import useNavigate
import { Outlet, useNavigate} from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Step 2: Save useNavigate() into a variable
  const navigate = useNavigate();

  const login = () =>{
    setIsLoggedIn(true);
  }

  const logout = () =>{
    setIsLoggedIn(false);
  };

  // Step 3: Pass the route we want to navigate our user to as an argument to the navigate function
  useEffect(() =>{
    if (isLoggedIn) {
      navigate("/");
    } else {
      navigate("/login");
    };
  }, [isLoggedIn]);

  return (
    <div className="app">
      <NavBar logout={logout} />
        { /*Pass login function to Outlet as context */}
      <Outlet context={login}/>
    </div>
  );
};

export default App;


