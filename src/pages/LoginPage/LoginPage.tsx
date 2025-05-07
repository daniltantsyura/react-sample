import React, { ReactElement } from "react";
import styles from './loginPage.module.scss';
import { Link } from "react-router-dom";

export const LoginPage = (): ReactElement => {
    return (
        <div className={styles.wrapper}>
            <form className={styles.form}>
                <h1 className={styles.heading}>Вход</h1>
                <Link to='/list'>Войти</Link>
            </form>
        </div>
    );
}