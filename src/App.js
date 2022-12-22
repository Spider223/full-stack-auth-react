import React from "react";
import Account from "./Account";
import FreeComponent from "./FreeComponent";
import AuthComponent from "./AuthComponent";
import ProtectedRoutes from "./ProtectedRoutes";
import { Routes, Route } from "react-router-dom";

import { Container, Col, Row } from "react-bootstrap";
// import ProtectedRoutes from "./ProtectedRoutes";

export default function App() {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1>Authentication Project</h1>

          <section id="navigation">
            <a href="/">Home</a>
            <a href="/free">Free Component</a>
            <a href="/auth">Auth Component</a>
          </section>
        </Col>
      </Row>
      <Routes>
        <Route path="/" element={<Account />} />
        <Route path="/free" element={<FreeComponent />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/auth" element={<AuthComponent />} />
        </Route>
      </Routes>
    </Container>
  );
}
