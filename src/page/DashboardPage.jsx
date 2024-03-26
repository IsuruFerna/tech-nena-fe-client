import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import DashboardTable from "../component/dashboard/DashboardTable";

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
         <DashboardTable />
      </>
   );
};

export default DashboardPage;
