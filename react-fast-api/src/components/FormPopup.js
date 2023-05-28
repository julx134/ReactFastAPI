import { Form, Input, Button } from "antd";
import React from "react";

export default function FormPopup({ onFormFinish }) {
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
