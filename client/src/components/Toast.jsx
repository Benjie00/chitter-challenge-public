import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = ({
  message,
  type,
  position,
  autoClose,
  hideProgressBar,
  closeOnClick,
  pauseOnHover,
  draggable,
  progress,
}) => {
  const notify = () => {
    switch (type) {
      case "success":
        toast.success(message, {
          position: position || "top-right",
          autoClose: autoClose || 3000,
          hideProgressBar: hideProgressBar || true,
          closeOnClick: closeOnClick || true,
          pauseOnHover: pauseOnHover || true,
          draggable: draggable || true,
          progress: progress || undefined,
        });
        break;
      case "error":
        toast.error(message, {
          position: position || "top-right",
          autoClose: autoClose || 3000,
          hideProgressBar: hideProgressBar || true,
          closeOnClick: closeOnClick || true,
          pauseOnHover: pauseOnHover || true,
          draggable: draggable || true,
          progress: progress || undefined,
        });
        break;
      case "warning":
        toast.warning(message, {
          position: position || "top-right",
          autoClose: autoClose || 3000,
          hideProgressBar: hideProgressBar || true,
          closeOnClick: closeOnClick || true,
          pauseOnHover: pauseOnHover || true,
          draggable: draggable || true,
          progress: progress || undefined,
        });
        break;
      default:
        toast.info(message, {
          position: position || "top-right",
          autoClose: autoClose || 3000,
          hideProgressBar: hideProgressBar || true,
          closeOnClick: closeOnClick || true,
          pauseOnHover: pauseOnHover || true,
          draggable: draggable || true,
          progress: progress || undefined,
        });
        break;
    }
  };

  return <button onClick={notify}>Show Toast</button>;
};

export default Toast;
