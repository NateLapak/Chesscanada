import Home from './Pages/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from "./Components/Footer/Footer";

import {useState, useEffect} from "react"

function App() {
  const [data, setdata] = useState({
    message: ""
  })

  // Hook that triggers when components are rendered on page
  useEffect(() => {

    // Fetch data from the /play endpoint
    fetch("/play").then((res) => {
      res.json().then((data) => {
        // Set data from api
        setdata({
          message: data.message
        })
      })
    })
  }, [])

  return (
    <div>
      <Navbar/>
      <Home/>
      <p>{data.message}</p>
      <Footer />
    </div>
  );
}

export default App;
