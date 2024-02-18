import React from 'react';
import {Layout} from 'components';
import {Button, Form, Input} from 'antd';
import './LoginPage.scss'


export const LoginPage = () => {
    return (
        <Layout>
            <div className='login-page'>
                <Form
                    className='login-form'
                    // onFinish={onFinish}
                    layout='vertical'
                >
                        <Form.Item
                            className='w-full'
                            name='name'
                            rules={[{ required: true }]}
                            label='Логин'
                        >
                            <Input placeholder='Укажите логин' allowClear />
                        </Form.Item>
                    <Form.Item
                        className='w-full'
                        name='name'
                        rules={[{ required: true }]}
                        label='Пароль'
                    >
                        <Input.Password placeholder='Укажите пароль' allowClear />
                    </Form.Item>
                    <Button type='primary' block htmlType='submit'>Войти</Button>
                </Form>
            </div>
        </Layout>
    );
};

