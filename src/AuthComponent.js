import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Cookies from "universal-cookie";
const cookies = new Cookies();
const token = cookies.get("TOKEN");

export default function AuthComponent() {
  let navigate = useNavigate();

  const [message, setMessage] = useState("");

  useEffect(() => {
    const configuration = {
      method: "get",
      url: "http://localhost:5000/auth-endpoint",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(configuration)
      .then((result) => {
        setMessage(result.data.message);
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);

  const logout = () => {
    cookies.remove("TOKEN", { path: "/" });
    navigate("/");
    console.log("logout");
  };

  return (
    <div className="text-center">
      <h1> Auth Component </h1>

      <h1 className="text-danger">{message}</h1>

      <Button type="submit" variant="danger" onClick={logout}>
        LogOut
      </Button>
    </div>
  );
}
