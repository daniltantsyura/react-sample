import { ReactElement } from "react";
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, HashRouter, Link, MemoryRouter, Route, RouterProvider, Routes, Outlet } from "react-router-dom";
import styles from './App.module.scss';
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { ListPage } from "../pages/ListPage/ListPage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
import { ProfileLayout } from "../layouts/ProfileLayout/ProfileLayout";
import { ProfilePage } from "../pages/ProfilePage/ProfilePage";
import { useNavigation } from "react-router-dom";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route index element={<HomePage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
            <Route path="/list">
                <Route index element={<ListPage/>}/>
                <Route path="*" element={<ListPage/>}/>
            </Route>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/profile" element={<ProfileLayout/>}>
                <Route index element={<ProfilePage/>}></Route>
            </Route>
        </Route>
    )
);

export function App(): ReactElement {
    const navigation = useNavigation();

    return (
            <section className={styles.app}>
                    <Link to='/'>Главная</Link>
                    <Link to='/sfsd'>404</Link>
                    <Link to='/login'>Вход</Link>
                    <Link to='/profile'>Профиль</Link>

                    <Outlet/>
            </section>
    );
}