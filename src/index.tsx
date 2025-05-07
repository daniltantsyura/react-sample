import './index.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './services/store';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { HomePage } from './pages/HomePage/HomePage';
import { ListPage } from './pages/ListPage/ListPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { ProfileLayout } from './layouts/ProfileLayout/ProfileLayout';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { router } from './App/App';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);