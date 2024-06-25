import React from 'react';
import { Button, Form, Input } from 'antd';
import { useLoginStore } from 'views';
import s from './LoginPage.module.scss';

export const LoginPage = () => {
  const logIn = useLoginStore((state) => state.logIn);

  const onSubmit = (form: { login: string; password: string }) => {
    logIn(form.login, form.password);
  };

  return (
    <div className={s.login}>
      <Form className={s.form} layout='vertical' onFinish={onSubmit}>
        <Form.Item
          className='w-full'
          name='login'
          rules={[{ required: true }]}
          label='Логин'
        >
          <Input placeholder='Укажите логин' allowClear />
        </Form.Item>
        <Form.Item
          className='w-full'
          name='password'
          rules={[{ required: true }]}
          label='Пароль'
        >
          <Input.Password placeholder='Укажите пароль' allowClear />
        </Form.Item>
        <Button type='primary' block htmlType='submit'>
          Войти
        </Button>
      </Form>
    </div>
  );
};
