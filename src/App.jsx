import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import NavbarCustom from "./component/NavbarCustom";
import AccountBox from "./component/Login-Register/AccountBox";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarCustom />
        <Routes>
          <Route path="/login" element={<AccountBox />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
