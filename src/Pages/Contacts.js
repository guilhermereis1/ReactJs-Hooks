import React, { Component } from "react";
import MainMenu from "../Layout/MainMenu";
import { Form, Input, InputNumber, Button } from "antd";

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 24 },
};

const validateMessages = {
  // eslint-disable-next-line
  required: "${label} is required!",
  types: {
    // eslint-disable-next-line
    email: "${label} is not validate email!",
    // eslint-disable-next-line
    number: "${label} is not a validate number!",
  },
  number: {
    // eslint-disable-next-line
    range: "${label} must be between ${min} and ${max}",
  },
};

const onFinish = (values) => {
  console.log(values);
};

class Contact extends Component {
  render() {
    return (
      <MainMenu>
        <h2>Contatos</h2>
        <hr />
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "name"]}
            label="Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[{ type: "email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "age"]}
            label="Age"
            rules={[{ type: "number", min: 0, max: 99 }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item name={["user", "website"]} label="Website">
            <Input />
          </Form.Item>
          <Form.Item name={["user", "introduction"]} label="Introduction">
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </MainMenu>
    );
  }
}

export default Contact;
