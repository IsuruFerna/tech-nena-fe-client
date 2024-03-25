import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PaginationDashboard from "../component/dashboard/PaginationDashboard";

const DashboardPage = () => {
   const navigate = useNavigate();
   const reduxUser = useSelector((state) => state.user);

   // ! only admins have acess to this site
   useEffect(() => {
      if (reduxUser.role !== "ADMIN") {
         navigate("/");
      }
   }, []);

   return (
      <>
         {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
         <h1>Hello world</h1>
         <PaginationDashboard />
      </>
   );
};

export default DashboardPage;
