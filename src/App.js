import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import CommentsList from "./components/CommentsList";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Fragment>
      <ToastContainer />
      <CommentsList />
    </Fragment>
  );
}
export default App;
