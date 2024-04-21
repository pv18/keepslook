import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from 'enums';
import {
  AboutPage,
  ElephantsPage,
  MainPage,
  PicturesPage,
  ReadyWorksPage,
  LoginPage,
  ContactsPage,
} from 'views';

export const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.MAIN} element={<MainPage />} />
      <Route path={ROUTES.ELEPHANTS} element={<ElephantsPage />} />
      <Route path={ROUTES.PICTURES} element={<PicturesPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.READY_WORKS} element={<ReadyWorksPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.CONTACTS} element={<ContactsPage />} />
      <Route path='*' element={<MainPage />} />
    </Routes>
  );
};
