import Home from './Pages/Home';
import Login from "./Pages/Login"
import Register from './Pages/Register';
import Play from './Pages/Play/Play';
import Puzzles from './Pages/Play/Puzzles';
import Standard from './Components/Play/Variations/Standard';
import Blindfold from './Components/Play/Variations/Blindfold';

import Navbar from './Components/Navbar/Navbar';
import {Route, Routes} from "react-router-dom"
import Footer from './Components/Footer/Footer';

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
        <Route path="/play/standard" element={<Standard />} />
        <Route path="/play/blindfold" element={<Blindfold />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
