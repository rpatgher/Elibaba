import { BrowserRouter, Route, Routes  } from "react-router-dom";

// *********** PAGES ***********
import Home from "./pages/Home";
import Login from"./pages/Login/login"
import Signup from"./pages/Signup/signup"

function App() {

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>

        </Routes>
      </BrowserRouter>
    )
}

export default App
