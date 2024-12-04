import { useState } from "react";

const useAlert = () => {
  const [alert, setAlert] = useState({ show: false, text: '', type: "danger" }); // default parameters

  const showAlert = ({ text = '', type = "danger", autoHideDuration = 0 }) => {
    if (!text) {
      console.warn("Alert requires text to be displayed.");
      return;
    }

    setAlert({ show: true, text, type });

    // Auto-hide after a specified duration if provided
    if (autoHideDuration > 0) {
      setTimeout(() => {
        hideAlert();
      }, autoHideDuration);
    }
  };

  const hideAlert = () => {
    setAlert({ show: false, text: '', type: "danger" });
  };

  return { alert, showAlert, hideAlert };
};

export default useAlert;
