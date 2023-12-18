import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutPage, ElephantsPage, MainPage, PicturesPage } from 'pages';
import { ROUTES } from 'enums';

export const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.MAIN} element={<MainPage />} />
      <Route path={ROUTES.ELEPHANTS} element={<ElephantsPage />} />
      <Route path={ROUTES.PICTURES} element={<PicturesPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
    </Routes>
  );
};
