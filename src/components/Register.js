import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

export default function Register() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  // const [register, setRegister] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const configuration = {
      method: "post",
      url: "http://localhost:5000/register",
      data: {
        email,
        password,
      },
    };

    axios(configuration)
      .then((result) => {
        console.log(result);
        // setRegister(true);
        Swal.fire("Awesome!", "You're successfully registered!", "success");
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
      <h2>Register</h2>
      <Form onSubmit={handleSubmit}>
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        {/* submit button */}
        <Button
          variant="primary"
          type="submit"
          //   onClick={(e) => handleSubmit(e)}
        >
          Register
        </Button>
      </Form>
    </>
  );
}
