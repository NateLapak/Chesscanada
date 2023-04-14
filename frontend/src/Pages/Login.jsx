import Loginpage from "../Components/Login/Loginpage"
import {useState, useEffect} from "react"


const Login = () => {
    const [data, setdata] = useState({
        message: ""
      })
    
      // Hook that triggers when components are rendered on page
      useEffect(() => {
    
        // Fetch data from the /play endpoint
        fetch("/login").then((res) => {
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
            <p>{data.message}</p>
            <Loginpage />
        </div>
    )
}

export default Login