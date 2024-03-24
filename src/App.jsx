import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarCustom from "./component/NavbarCustom";
import AccountBox from "./component/Login-Register/AccountBox";
import CreateContentPage from "./page/CreateArticlePage";
import NotFoundPage from "./page/NotFoundPage";
import DashboardPage from "./page/DashboardPage";
import ArticlePage from "./page/ArticlePage";
import HomePage from "./page/HomePage";

function App() {
   return (
      <>
         <BrowserRouter>
            <NavbarCustom />
            <Routes>
               <Route path="/login" element={<AccountBox />} />
               <Route path="/" element={<HomePage />} />
               <Route path="/create" element={<CreateContentPage />} />
               <Route path="/article/:postId" element={<ArticlePage />} />
               <Route path="/dashboard" element={<DashboardPage />} />
               <Route path="*" element={<NotFoundPage />} />
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
