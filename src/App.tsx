import Home from "./Pages/Home"
import Signin from "./Pages/signin"
import Signup from "./Pages/Signup"
import { Routes, Route } from "react-router-dom"


function App() {

  return (
    <div>
       <Routes>
       <Route path="/" element={ <Home /> } />
        <Route path="/Signin" element={ <Signin /> } />
        <Route path="/Signup" element={ <Signup /> } />
      </Routes>
    </div>
  )
}

export default App
