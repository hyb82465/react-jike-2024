import './index.scss'
import { Card, Form, Input, Button, Checkbox } from "antd"
import logo from '@/assets/logo.png'

const Login = () => {
    const onFinish = (values) => {
        console.log(values);
    }
    return (
        <div className="login">
            <Card className="login-container">
                <img className="login-logo" src={logo} alt="" />
                {/* 登陆表单 */}
                <Form onFinish={onFinish} validateTrigger="onBlur">
                    <Form.Item
                        name="mobile"
                        // 多条校验逻辑 先校验第一条 第一条通过之后再校验第二条
                        rules={[
                            {
                                required: true,
                                message: '请输入手机号',
                            },
                            {
                                pattern: /^1[3-9]\d{9}/,
                                message: '请输入正确的手机号格式'
                            }
                        ]}>
                        <Input size="large" placeholder="请输入手机号" />
                    </Form.Item>
                    <Form.Item
                        name="code"
                        rules={[
                            {
                                required: true,
                                message: '请输入验证码',
                            },
                        ]}>
                        <Input size="large" placeholder="请输入验证码" />
                    </Form.Item>
                    <Form.Item>
                        <Checkbox className="login-checkbox-label">
                            我已阅读并同意「用户协议」和「隐私条款」
                        </Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block>
                            登陆
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login