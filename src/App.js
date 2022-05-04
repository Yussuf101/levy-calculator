import Nav from "./Componets/Nav";
import Footer from "./Componets/Footer";
import SignUp from "./Componets/Register/SignUp";
import Home from "./Componets/Home";
import Login from "./Componets/logins/Login";
import LevyCalaculator from "./Componets/LevyCalculator";
import {BrowserRouter, Routes,  Route} from "react-router-dom";
import "./App.css";



function App() {
  
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <div className="container">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/LevyCalculator" element={<LevyCalaculator/>}/>
          <Route path="/Login" element={<Login/>} />
          <Route path="/signup" exact component={SignUp} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
