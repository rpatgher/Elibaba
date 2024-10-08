import { BrowserRouter, Route, Routes  } from "react-router-dom";

// *********** PAGES ***********
import Home from "./pages/Home";
import Login from "./pages/Login/login"
import Signup from "./pages/Signup/signup"
import Categoria from "./pages/Categoria/Categoria";

import Template from "./Templates/Template";

// ***************** Providers *****************
import { AppProvider } from './providers/AppProvider';


function App() {

    return (
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/> 
            <Route path="/categoria/:subcategory" element={<Categoria />}/> 
            <Route path="/template" element={<Template />}/>

          </Routes>
        </BrowserRouter>
      </AppProvider>
    )
}

export default App
