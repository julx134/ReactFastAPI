import { Form, Input, Button } from "antd";
import React from "react";

function FormPopup1({ onFormFinish }) {
  return (
    <>
      <Form onFinish={onFormFinish} layout="inline">
        <Form.Item
          label="ID"
          name="id"
          rules={[
            {
              required: true,
              message: "Please input the rover commands!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Generate Command
          </Button>
        </Form.Item>
      </Form>{" "}
    </>
  );
}

function FormPopup2({ onFormFinish }) {
  return (
    <>
      <Form onFinish={onFormFinish} layout="inline">
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
    </>
  );
}

function FormPopup3({ onFormFinish }) {
  return (
    <>
      <Form onFinish={onFormFinish}>
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
    </>
  );
}

function FormPopup4({ onFormFinish }) {
  return (
    <>
      <Form onFinish={onFormFinish}>
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
    </>
  );
}

function FormPopup5({ onFormFinish }) {
  return (
    <>
      {" "}
      <Form onFinish={onFormFinish} layout="inline">
        <Form.Item label="x" name="x">
          <Input />
        </Form.Item>
        <Form.Item label="y" name="y">
          <Input />
        </Form.Item>
        <Form.Item
          style={{ marginTop: "2%" }}
          label="Serial Number"
          name="serial_no"
        >
          <Input />
        </Form.Item>
        <Form.Item style={{ marginTop: "2%" }}>
          <Button type="primary" htmlType="submit">
            Generate Command
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

function FormPopup6({ onFormFinish }) {
  return (
    <>
      <Form onFinish={onFormFinish} layout="inline">
        <Form.Item
          label="Rover Commands"
          name="commands"
          style={{ marginBottom: "2%" }}
          rules={[
            {
              required: true,
              message: "Please input the rover commands!",
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
    </>
  );
}

function FormPopup7({ onFormFinish }) {
  return (
    <>
      <Form onFinish={onFormFinish} layout="inline">
        <Form.Item
          label="ID"
          name="id"
          rules={[
            {
              required: true,
              message: "Please input the rover commands!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Generate Command
          </Button>
        </Form.Item>
      </Form>
      ;
    </>
  );
}

export {
  FormPopup1,
  FormPopup2,
  FormPopup3,
  FormPopup4,
  FormPopup5,
  FormPopup6,
  FormPopup7,
};
