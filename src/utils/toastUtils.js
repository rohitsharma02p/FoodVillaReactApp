import { toast } from "react-toastify";

export const showErrorToast = (errorMessage) => {
  toast.error("Error: " + errorMessage, {
    position: toast.POSITION.TOP_RIGHT,
  });
};
