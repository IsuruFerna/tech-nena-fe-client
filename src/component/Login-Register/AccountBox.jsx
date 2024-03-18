import { useState } from "react";
import "../../assets/styles/login.css";
import SignUp from "./SignUp";
import SIgnIn from "./SignIn";
import { Alert, Snackbar } from "@mui/material";

export default function AccountBox() {
  const [type, setType] = useState("signIn");
  const [showNotification, setShowNotification] = useState(false);
  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <div
      className="AccountBox  pt-5 mt-5"
      style={{
        animation: "2.5s cubic-bezier(0.25, 1, 0.3, 1) circle-in-center both",
      }}
    >
      <h1 className="text-center my-2">Welcome on TechNena</h1>
      <div className={containerClass} id="container">
        <SignUp
          loginUser={() => {
            handleOnClick("signIn");
          }}
          showNotif={() => {
            setShowNotification(true);
          }}
        />
        <SIgnIn />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                Already have an account? Please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, There!</h1>
              <p>Don&apos;t have an account? Click to register.</p>
              <button
                className="ghost "
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={showNotification}
        autoHideDuration={10000}
        onClose={() => {
          setShowNotification(false);
        }}
        className="snack"
      >
        <Alert
          onClose={() => {
            setShowNotification(false);
          }}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Successfully registered!
        </Alert>
      </Snackbar>
    </div>
  );
}
