import { React, useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const configuration = {
      method: "post",
      url: "http://localhost:5000/login",
      data: {
        email,
        password,
      },
    };

    axios(configuration)
      .then((result) => {
        console.log(result);
        Swal.fire("Awesome!", "You're successfully Logged in!", "success");
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        window.location.href = "/auth";
      })

      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data,
        });
      });
  };

  return (
    <>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        {/* submit button */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
