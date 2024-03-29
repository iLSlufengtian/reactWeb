import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';


class Foods extends Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.history.push('/wiki')
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{ height: '100%',display:'flex',justifyContent:'center',marginTop:'160px' }}>
        <Form onSubmit={this.handleSubmit} className="login-form" style={{ width: '300px' }}>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item style={{ display: 'flex' }}>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            {/* <a className="login-form-forgot" href="">
                Forgot password
              </a> */}
            <Button type="primary" htmlType="submit" className="login-form-button" style={{ float: 'right' }}>
              Log in
              </Button>
            {/* Or <a href="">register now!</a> */}
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const Food = Form.create()(Foods)
export default Food