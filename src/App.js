import Nav from "./Componets/nav";
import Footer from "./Componets/Footer";
import Signup from "./Componets/Register/Signup";
import Home from "./Componets/Home";
import Login from "./Componets/logins/Login";
import LevyCalaculator from "./Componets/LevyCalculator";
import {BrowserRouter, Routes, Route, Redirect} from "react-router-dom";
import "./App.css";
import { useState } from "react";




function App() {
  const [auth, setAuth] = useState({
    auth_status: false,
    email: "",
    token: "",
  });
  
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <div className="container">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/LevyCalculator" element={<LevyCalaculator/>}/>
          {/* <Route path="/LevyCalculator">
            {auth.auth_status?(
            <LevyCalaculator auth={auth}
            setAuth={setAuth}/>):(
              <Redirect exact from="//LevyCalculator" to="/login"/>
            )}
            </Route> */}
          <Route path="/Login" element={<Login auth={auth} setAuth={setAuth} />} />
          <Route path="/signup" exact component={Signup} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
