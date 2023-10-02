
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ToastProvider({ children }) {
  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
}

export default ToastProvider;
