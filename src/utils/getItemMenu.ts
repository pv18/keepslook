import React from 'react';
import { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

export const getItemMenu = (
    check: boolean,
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem => {
    if (!check) return null;
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
};
