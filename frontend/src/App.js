import Home from './Pages/Home';
import Login from "./Pages/Login"
import Register from './Pages/Register';
import Play from './Pages/Play/Play';
import Puzzles from './Pages/Play/Puzzles';

import Navbar from './Components/Navbar/Navbar';
import Footer from "./Components/Footer/Footer";

import {Route, Routes} from "react-router-dom"

function App() {

  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/play" element={<Play />} />
        <Route path="/puzzles" element={<Puzzles />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
