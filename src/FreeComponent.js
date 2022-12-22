import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FreeComponent() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const configuration = {
      method: "get",
      url: "http://localhost:5000/free-endpoint",
    };

    axios(configuration)
      .then((result) => {
        setMessage(result.data.message);
      })

      .catch((error) => {
        error = new Error();
      });
  }, []);
  return (
    <>
      <h1 className="text-center text-danger">{message}</h1>
    </>
  );
}
