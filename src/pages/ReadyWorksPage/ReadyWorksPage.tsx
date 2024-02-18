import React from 'react';
import {Layout,EmptyData} from 'components';
import './ReadyWorksPage.scss'

export const ReadyWorksPage = () => {
    return (
        <Layout>
            <div className={'ready-works-page'}>
                <EmptyData>Готовых работ на данный момент нет!</EmptyData>
            </div>
        </Layout>
    );
};

