import logo from './logo.svg';
import {
  Breadcrumb,
  Button,
  Col,
  Layout,
  Row,
  Menu,
  Card,
  Form,
  Input,
  Checkbox,
} from 'antd';

import 'antd/dist/antd.css';
import axios from 'axios';
import './App.css';
import { Content, Footer, Header } from 'antd/lib/layout/layout';

function App() {
  return (
    <div className='App'>
      {/* <>
        <Button type='primary'>Primary Button</Button>
        <Button>Default Button</Button>
        <Button type='dashed'>Dashed Button</Button>
        <br />
        <Button type='text'>Text Button</Button>
        <Button type='link'>Link Button</Button>
      </> 
      -----------------------------------------------------------------------------------------
      */}
      {/* <Row align='' justify=''>
        <Col
          span={6}
          style={{
            background: 'red',
          }}>
          First Column
        </Col>
        <Col
          offset={6}
          span={12}
          style={{
            background: 'green',
          }}>
          Second Column
        </Col>
      </Row>
      -------------------------------------------------------------------------------------------------
      */}
      <Layout className='layout'>
        <Header>
          <div className='logo' />
          <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>About</Menu.Item>
            <Menu.Item>Contact</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className='site-layout-content'>
            <Row>
              <Col
                span={8}
                offset={8}
                style={{
                  background: 'yellow',
                }}>
                <Card>
                  <Form
                    name='basic'
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true, username: 'admin' }}
                    onFinish={({ username, email, password }) => {
                      axios.post('/login', {
                        username: username,
                        email: email,
                        password: password,
                      });
                    }}
                    // onFinishFailed={onFinishFailed}
                    autoComplete='off'>
                    <Form.Item
                      label='Username'
                      name='username'
                      rules={[
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                      ]}>
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label='Email'
                      name='email'
                      rules={[
                        {
                          required: true,
                          message: 'Please input email!',
                        },
                      ]}>
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label='Password'
                      name='password'
                      rules={[
                        {
                          required: true,
                          message: 'Please input your password!',
                        },
                      ]}>
                      <Input.Password />
                    </Form.Item>

                    <Form.Item
                      name='remember'
                      valuePropName='checked'
                      wrapperCol={{ offset: 8, span: 16 }}>
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                      <Button type='primary' htmlType='submit'>
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
