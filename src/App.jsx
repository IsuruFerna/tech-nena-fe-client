import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />} />
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
