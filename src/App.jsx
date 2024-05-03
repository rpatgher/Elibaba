import { BrowserRouter, Route, Routes  } from "react-router-dom";

// *********** PAGES ***********
import Home from "./pages/Home";
import Login from"./pages/Login/login"
function App() {

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    )
}

export default App
