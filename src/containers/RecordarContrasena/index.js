import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Wrapper = ({children}) => {

  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
    return (
      <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="">
          Regresar
        </Button>
      </Form.Item>
    </Form>
    )
}

export default Wrapper;
