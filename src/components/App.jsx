import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './Layout/Layout';

const HomePage = lazy(() => import('pages/Home/Home'));
const ResultsPage = lazy(() => import('pages/Results/Results'));
const RegisterPage = lazy(() => import('pages/Register/Register'));
const LoginPage = lazy(() => import('pages/Login/Login'));

export const App = () => {
  console.log('privet');
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};
