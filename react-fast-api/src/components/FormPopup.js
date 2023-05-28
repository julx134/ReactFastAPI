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

export { FormPopup1 };
export default FormPopup1;
