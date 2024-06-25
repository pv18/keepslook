import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import { BrowserRouter } from 'react-router-dom';
import locale from 'antd/es/locale/ru_RU';
import { antTheme } from 'styles/antTheme';
import { ConfigProvider } from 'antd';
import './styles/global.scss';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <ConfigProvider locale={locale} theme={antTheme}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ConfigProvider>,
);
