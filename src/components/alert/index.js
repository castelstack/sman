import { toast } from "react-toastify";

export const Alert = (message, type, options = {}) => {
  switch (type) {
    case "error":
      toast.error(message, options);
      break;
    case "success":
      toast.success(message, options);
      break;
    case "warning":
      toast.warning(message, options);
      break;
    case "dark":
      toast.dark(message, options);
      break;
    case "info":
      toast.info(message, options);
      break;
    default:
      toast(message, options);
  }
};

export const TYPE = {
  ERROR: "error",
  SUCCESS: "success",
  WARNING: "warning",
  DARK: "dark",
  INFO: "info",
};
