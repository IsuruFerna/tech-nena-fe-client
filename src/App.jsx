import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Register from "./component/user/Register";
import LoginPage from "./component/LoginPage";

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/register" element={<Register />} />
               <Route path="/login" element={<LoginPage />} />
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
