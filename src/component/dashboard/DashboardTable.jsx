import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardArticleData } from "../../redux/actions/dashboard_action";
import TablePagination from "@mui/material/TablePagination";
import { Container } from "react-bootstrap";
import { North } from "@mui/icons-material";
import DashboardSelectState from "./DashboardSelectState";

const DashboardTable = () => {
   const { articles, totalElements } = useSelector((state) => state.dashboard);
   const [page, setPage] = useState(0);
   const [order, setOrder] = useState("postDate");
   const [rowsPerPage, setRowsPerPage] = useState(10);
   const [tableRow, setTableRow] = useState({
      username: false,
      title: false,
      postDate: true,
      category: false,
      state: false,
      name: false,
      lastname: false,
   });
   const [state, setState] = useState("all");

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchDashboardArticleData(page, rowsPerPage, order, state));
   }, [page, rowsPerPage, order, state]);

   const handleClick = (e) => {
      let target = e.target;
      let elemetId;

      // set target's id or it's parent's id
      if (target.id === "") {
         elemetId = target.parentElement.id;
      } else {
         elemetId = target.id;
      }

      // sets value to true on row clicks
      setOrder(elemetId);
      setTableRow({
         username: false,
         title: false,
         postDate: false,
         category: false,
         state: false,
         name: false,
         lastname: false,
         [elemetId]: true,
      });

      // ? (toggles arrow when user clicks)
      // if (tableRow[elemetId] === true) {
      //    setTableRow((prevState) => ({
      //       ...prevState,
      //       [elemetId]: false,
      //    }));
      // } else {
      //    setTableRow({
      //       username: false,
      //       title: false,
      //       postDate: false,
      //       category: false,
      //       state: false,
      //       name: false,
      //       lastname: false,
      //       [elemetId]: true,
      //    });
      // }
   };

   const handleChangePage = (event, newPage) => {
      setPage(newPage);
   };

   const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
   };

   return (
      <Container fluid>
         <Table striped bordered hover>
            <thead>
               <tr>
                  <th onClick={handleClick} id="avatarUrl">
                     Avatar
                  </th>
                  <th onClick={handleClick} id="username">
                     <div className="flex justify-between items-center">
                        Username
                        {tableRow.username && (
                           <North className="text-end" fontSize="3em" />
                        )}
                     </div>
                  </th>
                  <th onClick={handleClick} id="title">
                     <div className="flex justify-between items-center">
                        Title
                        {tableRow.title && (
                           <North className="text-end" fontSize="3em" />
                        )}
                     </div>
                  </th>
                  <th onClick={handleClick} id="postDate">
                     <div className="flex justify-between items-center">
                        Published
                        {tableRow.postDate && (
                           <North className="text-end" fontSize="3em" />
                        )}
                     </div>
                  </th>
                  <th onClick={handleClick} id="category">
                     <div className="flex justify-between items-center">
                        Category
                        {tableRow.category && (
                           <North className="text-end" fontSize="3em" />
                        )}
                     </div>
                  </th>
                  <th id="state">
                     <div className="flex justify-between items-center">
                        <DashboardSelectState
                           state={state}
                           setState={setState}
                        />
                        {tableRow.state && (
                           <North className="text-end" fontSize="3em" />
                        )}
                     </div>
                  </th>
                  <th onClick={handleClick} id="name">
                     <div className="flex justify-between items-center">
                        First Name
                        {tableRow.name && (
                           <North className="text-end" fontSize="3em" />
                        )}
                     </div>
                  </th>
                  <th onClick={handleClick} id="lastname">
                     <div className="flex justify-between items-center">
                        Last Name
                        {tableRow.lastname && (
                           <North className="text-end" fontSize="3em" />
                        )}
                     </div>
                  </th>
               </tr>
            </thead>
            <tbody>
               {articles.map((article) => {
                  return (
                     <tr key={article.id}>
                        <td>{article.avatarUrl}</td>
                        <td>{article.username}</td>
                        <td>{article.title}</td>
                        <td>{article.postDate}</td>
                        <td>{article.category}</td>
                        <td>{article.state}</td>
                        <td>{article.name}</td>
                        <td>{article.lastname}</td>
                     </tr>
                  );
               })}
            </tbody>
         </Table>

         <TablePagination
            component="div"
            count={totalElements}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
         />
      </Container>
   );
};

export default DashboardTable;
