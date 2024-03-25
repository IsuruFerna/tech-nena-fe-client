import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { useDispatch } from "react-redux";
import { fetchDashboardArticleData } from "../../redux/actions/dashboard_action";

const PaginationDashboard = () => {
   const { data } = useDemoData({
      dataSet: "Commodity",
      rowLength: 500,
      maxColumns: 6,
   });
   const [paginationModel, setPaginationModel] = useState({
      pageSize: 25,
      page: 0,
   });

   const dispatch = useDispatch();

   useEffect(() => {
      console.log("these are the data: ", data);
      dispatch(fetchDashboardArticleData());
   }, []);

   return (
      <div style={{ height: 400, width: "100%" }}>
         <DataGrid
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            {...data}
         />
      </div>
   );
};

export default PaginationDashboard;
