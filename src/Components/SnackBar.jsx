import { toast } from "react-toastify";
const SnackBar = (type, message) => {
  toast[type](message, {
    autoClose: 6 * 1000,
    position: "top-right",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  return true;
};
export default SnackBar;
