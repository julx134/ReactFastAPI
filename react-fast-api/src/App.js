import React, { useState } from "react";
import TerminalScreen from "./components/TerminalScreen";
import { Col, Row } from "antd";

export default function App() {
  return (
    <Row>
      <Col
        span={12}
        style={{
          backgroundColor: "#F1A031",
        }}
      >
        <Row>
          <h1>Testttttttttttttttttttttttt</h1>
        </Row>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <TerminalScreen />
        </Row>
      </Col>
    </Row>
  );
}
