import Nav from "./Componets/nav";
import Home from "./Componets/Home";
import LevyCalaculator from "./Componets/LevyCalculator";
import Login from "./Componets/Login";
import SignUp from "./Componets/SignUp";
import {BrowserRouter, Routes,  Route} from "react-router-dom";
import "./App.css";



function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <div className="container">
        <Routes>
          <Route path='/Home' element={<Home/>} />
          <Route path="/levyCalculator" component={<LevyCalaculator/>}/>
          <Route path="/login" component={<Login/>} />
          <Route path="/signup" component={<SignUp/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
