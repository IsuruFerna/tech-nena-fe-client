import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "../assets/styles/nav.css";

import logo from "../assets/img/logo.jpeg";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, styled } from "@mui/material";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import ContrastIcon from "@mui/icons-material/Contrast";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanUserAction } from "../redux/actions/user_action";

const NavbarCustom = () => {
   const location = useLocation();
   const navigate = useNavigate();

   const reduxUser = useSelector((state) => state.user);

   const [barDirection, setBarDirection] = useState("down");

   const userData = localStorage.getItem("token");

   const actions = [
      { icon: <ContrastIcon />, name: "Toggle dark mode" },
      { icon: <LogoutIcon />, name: "Logout" },
   ];

   const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
      position: "absolute",
      "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
         bottom: theme.spacing(2),
         right: theme.spacing(2),
      },
      "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
         top: theme.spacing(2),
         left: theme.spacing(2),
      },
   }));

   const dispatch = useDispatch();

   // navbar speed dial button
   const doSomething = (param) => {
      switch (param) {
         case "Logout": {
            // when user logs out cleans token and clean persist user data
            localStorage.removeItem("token");
            dispatch(cleanUserAction());
            navigate("/login");
            break;
         }
         case "Toggle dark mode": {
            console.log("dark mode to embed");
            break;
         }
      }
   };

   useEffect(() => {
      const handleResize = (e) => {
         if (e.target.innerWidth < 991) {
            setBarDirection("right");
         } else {
            setBarDirection("down");
         }
      };
      window.addEventListener("resize", handleResize);
   }, []);

   return (
      <Navbar
         expand="lg"
         className={
            location.pathname === "/login"
               ? "d-none"
               : "bg-white shadow-btm p-0 sticky-top"
         }
      >
         <Container className="navbar-cont">
            <Navbar.Brand
               onClick={() => {
                  navigate("/");
               }}
            >
               <img
                  src={logo}
                  width="100"
                  height="50"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
               />
            </Navbar.Brand>{" "}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="mx-auto">
                  <Nav.Link
                     active={location.pathname === "/" ? true : false}
                     onClick={() => {
                        navigate("/");
                     }}
                  >
                     <i className="bi bi-house-door-fill me-1"></i>
                     Home
                  </Nav.Link>
                  <Nav.Link
                     active={location.pathname === "/profile" ? true : false}
                     onClick={() => {
                        navigate("/profile");
                     }}
                  >
                     <i className="bi bi-person-fill me-1"></i>
                     Profile
                  </Nav.Link>
                  <Nav.Link
                     active={location.pathname === "/contacts" ? true : false}
                  >
                     <i className="bi bi-info-circle-fill me-1"></i>
                     Contact us
                  </Nav.Link>
                  {reduxUser.role === "ADMIN" && (
                     <>
                        <Nav.Link
                           active={
                              location.pathname === "/dashboard" ? true : false
                           }
                           onClick={() => {
                              navigate("/dashboard");
                           }}
                        >
                           <i className="bi bi-clipboard2-pulse-fill me-1"></i>
                           Dashboard
                        </Nav.Link>
                        <Nav.Link
                           active={
                              location.pathname === "/pending" ? true : false
                           }
                           onClick={() => {
                              navigate("/pending");
                           }}
                        >
                           <i className="bi bi-ui-checks-grid me-1"></i>
                           Approve posts
                        </Nav.Link>
                     </>
                  )}
               </Nav>
               {userData ? (
                  <Box
                     sx={{ position: "relative", mb: 2, height: 60 }}
                     className="d-flex justify-content-start"
                  >
                     <StyledSpeedDial
                        ariaLabel="SpeedDial playground example"
                        icon={<SettingsIcon />}
                        direction={barDirection}
                        style={{ left: "0px" }}
                     >
                        {actions.map((action) => (
                           <SpeedDialAction
                              className="bg-warning"
                              key={action.name}
                              icon={action.icon}
                              tooltipTitle={action.name}
                              onClick={() => {
                                 doSomething(action.name);
                              }}
                           />
                        ))}
                     </StyledSpeedDial>
                  </Box>
               ) : (
                  <Button
                     className="rounded-4 shadow-btm mb-md-0 mb-2 ms-md-0 ms-5"
                     onClick={() => {
                        navigate("/login");
                     }}
                  >
                     Login
                  </Button>
               )}
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};

export default NavbarCustom;
