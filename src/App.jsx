import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import NavbarCustom from "./component/NavbarCustom";
import AccountBox from "./component/Login-Register/AccountBox";
import CreateContentPage from "./page/CreateContentPage";
import NotFoundPage from "./page/NotFoundPage";

function App() {
   return (
      <>
         <BrowserRouter>
            <NavbarCustom />
            <Routes>
               <Route path="/login" element={<AccountBox />} />
               <Route path="/" element={<Home />} />
               <Route path="/create" element={<CreateContentPage />} />
               <Route path="*" element={<NotFoundPage />} />
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
