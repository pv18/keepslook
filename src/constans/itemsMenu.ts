import { MenuProps } from 'antd';
import { getItemMenu } from 'utils';
import { ROUTES } from 'enums/routes';

type MenuItem = Required<MenuProps>['items'][number];

export const itemsMenu: MenuItem[] = [
  getItemMenu(true, 'Главная', ROUTES.MAIN),
  getItemMenu(true, 'Слоны', ROUTES.ELEPHANTS),
  getItemMenu(true, 'Пано Дали', ROUTES.PICTURES),
  getItemMenu(true, 'Обо мне', ROUTES.ABOUT),
  getItemMenu(true, 'Готовые работы', ROUTES.READY_WORKS),
  // getItemMenu(true, 'Контакты', ROUTES.CONTACTS),
];
