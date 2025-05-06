import { ReactElement } from "react";
import { BrowserRouter, HashRouter, Link, MemoryRouter, Route, Routes } from "react-router-dom";
import styles from './App.module.scss';
import { LoginPage } from "../pages/LoginPage/LoginPage";

export function App(): ReactElement {
    return (
        <section className={styles.app}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={LoginPage}/>
                </Routes>
            </BrowserRouter>
        </section>
    );
}