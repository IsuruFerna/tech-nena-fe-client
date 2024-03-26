import React from "react";
import Form from "react-bootstrap/Form";

const DashboardSelectState = ({ setState }) => {
   return (
      <Form.Select
         onChange={(e) => {
            setState(e.target.value);
         }}
         aria-label="Default select example"
      >
         <option value="all">State: All</option>
         <option value="pending">Pending</option>
         <option value="approved">Approved</option>
         <option value="notApproved">Not Approved</option>
      </Form.Select>
   );
};

export default DashboardSelectState;
