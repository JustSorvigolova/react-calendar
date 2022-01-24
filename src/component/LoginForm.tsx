import React, {FC, useState} from 'react';
import {Button, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {useACtions, useTypedSelector} from "../useTypedSelector";

const LoginForm: FC = () => {
    const {error, IsLoading} = useTypedSelector(state => state.auth)
    const [username, Setusername] = useState('')
    const [password, Setpassword] = useState('')
    const {login} = useACtions()
    const submit = () => {
     login(username, password)
    }
    return (
        <Form onFinish={submit}>
            {error && <div style={{color: "red"}}>
                {error}
            </div>}
            <Form.Item
                label="Username"
                name="username"
                rules={[rules.required('Please input your username!')]}>
                <Input value={username} onChange={e => Setusername(e.target.value)} />
            </Form.Item>
                <Form.Item
                    label="password"
                    name="password"
                    rules={[rules.required('Please input your password!')]}
                >
                    <Input type={'password'} value={password} onChange={e => Setpassword(e.target.value)} />
                </Form.Item>
            <Form.Item>
                <Button loading={IsLoading}  type="primary" htmlType="submit">
                    Sign in
                </Button>
            </Form.Item>
      </Form>
    );
};

export default LoginForm;