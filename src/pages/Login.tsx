import { Button, Col, Form, Input, Row } from 'antd';
import axios from 'axios';
import { useState } from 'react';



type FieldType = {
  email?: string;
  password?: string;
};

const Login = () => {
    const [error, setError] = useState<string>('')

    const onFinish = async (values: any) => {
        setError('');
        try {
            const { data } = await axios.post('http://localhost:3001/auth/email/login', {
                email: values.email,
                password: values.password
              });
    
            console.log(data);
            
        } catch (error) {
            if(axios.isAxiosError(error)) {
                setError(error.response?.data.message);
            }
            console.log(error);
        }
    
    
    };
    
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };

  return (
    <Row justify={'center'}>
        <Col span={12}>
            <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ type: 'email', required: true, message: 'Please input your email!' }]}
            >
            <Input />
            </Form.Item>

            <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
            >
            <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
                Login
            </Button>
            </Form.Item>
            <p style={{color: 'red'}}>{error}</p>
        </Form>
    </Col>
  </Row>
  )
}

export default Login