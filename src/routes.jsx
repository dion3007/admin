import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import MainLayout from './layouts/MainLayout';
import AccountView from './views/account/AccountView';
import UserListView from './views/user/UserListView';
import PatientListView from './views/patient/PatientListView';
import DashboardView from './views/reports/DashboardView';
import LoginView from './views/auth/LoginView';
import NotFoundView from './views/errors/NotFoundView';
import ProductListView from './views/product/ProductListView';
import RegisterView from './views/auth/RegisterView';
import SettingsView from './views/settings/SettingsView';
import SubjectListView from './views/subject/SubjectListView';
import EducationListView from './views/education/EducationListView';
import FacilityListView from './views/facility/FacilityListView';
import QnaListView from './views/qna/QnaListView';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'user', element: <UserListView /> },
      { path: 'pasien', element: <PatientListView /> },
      { path: 'subjek-konsultasi', element: <SubjectListView /> },
      { path: 'edukasi', element: <EducationListView /> },
      { path: 'fasilitas', element: <FacilityListView /> },
      { path: 'tanya-jawab', element: <QnaListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'products', element: <ProductListView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/login" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
