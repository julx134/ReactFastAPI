import React, { useState, useRef } from "react";
import TerminalScreen from "./components/TerminalScreen";
import { Col, Row, Card, Button, Modal } from "antd";

export default function App() {
  const [command, setCommand] = useState("");
  const [result, setResult] = useState("");
  const [commandDetails, setCommandDetails] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const baseURL = "http://127.0.0.1:8000";

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const getTerminalCommand = (data) => {
    setCommand(data);
  };

  const getTerminalResult = (data) => {
    setResult(data);
  };

  return (
    <Row>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            Ok
          </Button>,
        ]}
      >
        {commandDetails}
      </Modal>
      <Col
        span={12}
        style={{
          backgroundColor: "#F1A031",
        }}
      >
        <Row>
          <Button
            onClick={() => {
              showModal();
              setCommandDetails(baseURL + "/map");
            }}
          >
            Get Map
          </Button>
        </Row>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <TerminalScreen
            writeCommand={getTerminalCommand}
            writeResult={getTerminalResult}
          />
        </Row>
      </Col>
      <Col span={12}>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            title={command ? command : baseURL}
            size="small"
            style={{
              width: "100vw",
              height: "40vh",
              margin: "5%",
              borderWidth: "2px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>{result}</p>
          </Card>
        </Row>
        <Row>
          <h1>test</h1>
        </Row>
      </Col>
    </Row>
  );
}
