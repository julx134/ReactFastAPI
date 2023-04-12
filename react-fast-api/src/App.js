import React, { useState, useRef } from "react";
import TerminalScreen from "./components/TerminalScreen";
import { Col, Row, Card, Button, Modal, Space, Form, Input } from "antd";

export default function App() {
  const [command, setCommand] = useState("");
  const [result, setResult] = useState("");
  const [commandDetails, setCommandDetails] = useState("");
  const [commandFormDetails, setCommandFormDetails] = useState("");
  const [formType, setFormType] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formRequired, setFormRequired] = useState(false);
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

  const onFormFinishID = (values) => {
    setCommandDetails(`${commandFormDetails}/${values.id}`);
  };

  const onFormFinishPutMine = (values) => {
    const obj = {
      serial_no: values.serial_no ? values.serial_no : "",
      x: values.x ? values.x : "",
      y: values.y ? values.x : "",
    };

    setCommandDetails(
      `${commandFormDetails}/${values.id} ${JSON.stringify(obj)}`
    );
  };

  const onFormFinishMap = (values) => {
    const obj = {
      row: values.row ? values.row : "",
      col: values.col ? values.col : "",
      map: ["string"],
    };
    setCommandDetails(`${commandFormDetails} ${JSON.stringify(obj)}`);
  };

  const onFormFinishPutRover = (values) => {
    setCommandDetails(
      `${commandFormDetails}/${values.id}?commands=${values.commands}`
    );
  };

  return (
    <Row>
      <Modal
        title="Please copy the command to the terminal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            Ok
          </Button>,
        ]}
      >
        {formRequired ? (
          <>
            {formType == 1 && (
              <>
                <Form onFinish={onFormFinishID} layout="inline">
                  <Form.Item label="ID" name="id">
                    <Input />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Generate Command
                    </Button>
                  </Form.Item>
                </Form>
                <div style={{ width: "100%", backgroundColor: "#000000" }}>
                  <p
                    style={{
                      color: "#FFFFFF",
                      marginLeft: "1%",
                      fontFamily: "Roboto Mono",
                    }}
                  >
                    {commandDetails}
                  </p>
                </div>
              </>
            )}
            {formType == 2 && (
              <>
                <Form onFinish={onFormFinishMap} layout="inline">
                  <Form.Item label="Row" name="row">
                    <Input />
                  </Form.Item>
                  <Form.Item label="Col" name="col">
                    <Input />
                  </Form.Item>
                  <Form.Item style={{ marginTop: "2%" }}>
                    <Button type="primary" htmlType="submit">
                      Generate Command
                    </Button>
                  </Form.Item>
                </Form>
                <div style={{ width: "100%", backgroundColor: "#000000" }}>
                  <p
                    style={{
                      color: "#FFFFFF",
                      marginLeft: "1%",
                      fontFamily: "Roboto Mono",
                    }}
                  >
                    {commandDetails}
                  </p>
                </div>
              </>
            )}
            {formType == 3 && (
              <>
                <Form onFinish={onFormFinishPutMine}>
                  <Form.Item
                    label="ID"
                    name="id"
                    style={{ marginBottom: "2%" }}
                    rules={[
                      {
                        required: true,
                        message: "Please input the ID!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item label="x" name="x">
                    <Input />
                  </Form.Item>
                  <Form.Item label="y" name="y">
                    <Input />
                  </Form.Item>
                  <Form.Item label="Serial Number" name="serial_no">
                    <Input />
                  </Form.Item>
                  <Form.Item style={{ marginTop: "2%" }}>
                    <Button type="primary" htmlType="submit">
                      Generate Command
                    </Button>
                  </Form.Item>
                </Form>
                <div style={{ width: "100%", backgroundColor: "#000000" }}>
                  <p
                    style={{
                      color: "#FFFFFF",
                      marginLeft: "1%",
                      fontFamily: "Roboto Mono",
                    }}
                  >
                    {commandDetails}
                  </p>
                </div>
              </>
            )}
            {formType == 4 && (
              <>
                <Form onFinish={onFormFinishPutRover}>
                  <Form.Item
                    label="ID"
                    name="id"
                    style={{ marginBottom: "2%" }}
                    rules={[
                      {
                        required: true,
                        message: "Please input the ID!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Commands"
                    name="commands"
                    style={{ marginBottom: "2%" }}
                    rules={[
                      {
                        required: true,
                        message: "Please input the commands!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item style={{ marginTop: "2%" }}>
                    <Button type="primary" htmlType="submit">
                      Generate Command
                    </Button>
                  </Form.Item>
                </Form>
                <div style={{ width: "100%", backgroundColor: "#000000" }}>
                  <p
                    style={{
                      color: "#FFFFFF",
                      marginLeft: "1%",
                      fontFamily: "Roboto Mono",
                    }}
                  >
                    {commandDetails}
                  </p>
                </div>
              </>
            )}
          </>
        ) : (
          <div style={{ width: "100%", backgroundColor: "#000000" }}>
            <p
              style={{
                color: "#FFFFFF",
                marginLeft: "1%",
                fontFamily: "Roboto Mono",
              }}
            >
              {commandDetails}
            </p>
          </div>
        )}
      </Modal>
      <Col
        span={12}
        style={{
          backgroundColor: "#F1A031",
        }}
      >
        <Row>
          <Space wrap style={{ margin: "5%" }}>
            <Button
              type="primary"
              onClick={() => {
                setFormRequired(false);
                showModal();
                setCommandDetails("get " + baseURL + "/map");
              }}
            >
              Get Map
            </Button>
            <Button
              type="primary"
              onClick={() => {
                setCommandDetails("get " + baseURL + "/mines");
                setFormRequired(false);
                showModal();
              }}
            >
              Get Mines
            </Button>
            <Button
              type="primary"
              onClick={() => {
                setCommandDetails("get " + baseURL + "/rovers");
                setFormRequired(false);
                showModal();
              }}
            >
              Get Rovers
            </Button>
            <Button
              type="primary"
              onClick={() => {
                setCommandDetails("");
                setCommandFormDetails("get " + baseURL + "/mines");
                setFormType(1);
                setFormRequired(true);
                showModal();
              }}
            >
              Get Mine By Id
            </Button>
            <Button
              type="primary"
              onClick={() => {
                setCommandDetails("");
                setCommandFormDetails("get " + baseURL + "/rovers");
                setFormType(1);
                setFormRequired(true);
                showModal();
              }}
            >
              Get Rover By Id
            </Button>
            <Button
              onClick={() => {
                setCommandDetails("");
                setCommandFormDetails("put " + baseURL + "/map");
                setFormType(2);
                setFormRequired(true);
                showModal();
              }}
            >
              Update Map
            </Button>
            <Button
              onClick={() => {
                setFormRequired(false);
                showModal();
                setCommandDetails("put " + baseURL + "/reset_map");
              }}
            >
              Reset Map
            </Button>
            <Button
              onClick={() => {
                setCommandDetails("");
                setCommandFormDetails("put " + baseURL + "/mines");
                setFormType(3);
                setFormRequired(true);
                showModal();
              }}
            >
              Update Mine
            </Button>
            <Button
              onClick={() => {
                setCommandDetails("");
                setCommandFormDetails("put " + baseURL + "/rovers");
                setFormType(4);
                setFormRequired(true);
                showModal();
              }}
            >
              Update Rover
            </Button>
            <Button
              onClick={() => {
                showModal();
                setCommandDetails(baseURL + "/map");
              }}
            >
              Get Map
            </Button>
            <Button
              onClick={() => {
                showModal();
                setCommandDetails(baseURL + "/map");
              }}
            >
              Get Map
            </Button>
            <Button
              onClick={() => {
                showModal();
                setCommandDetails(baseURL + "/map");
              }}
            >
              Get Map
            </Button>
            <Button
              type="primary"
              danger
              onClick={() => {
                setCommandDetails("");
                setCommandFormDetails(baseURL + "/mines");
                setFormType(1);
                setFormRequired(true);
                showModal();
              }}
            >
              Delete Mine by ID
            </Button>
            <Button
              type="primary"
              danger
              onClick={() => {
                setCommandDetails("");
                setCommandFormDetails(baseURL + "/rovers");
                setFormType(1);
                setFormRequired(true);
                showModal();
              }}
            >
              Delete Rover by ID
            </Button>
          </Space>
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
