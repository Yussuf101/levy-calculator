import Nav from "./Componets/Nav";
import Footer from "./Componets/Footer";
import SignUp from "./Componets/SignUp";
import Home from "./Componets/Home";
import Login from "./Componets/Login";
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
          <Route path='/Home' element={<Home/>} />
          <Route path="/LevyCalculator" component={<LevyCalaculator/>}/>
          <Route path="/Login" component={<Login/>} />
          <Route path="/Sign-up" component={<SignUp/>} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
