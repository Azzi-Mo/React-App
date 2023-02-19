import React, { useEffect } from "react";

export default function Alert({ msg, type, removeAlert, list }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  },[list]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
}
