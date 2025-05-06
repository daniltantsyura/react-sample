import React, { ReactElement } from "react";
import styles from './loginPage.module.scss';

export const LoginPage = (): ReactElement => {
    return (
        <div className={styles.wrapper}>
            <form className={styles.form}>
                <h1 className={styles.heading}>Вход</h1>
            </form>
        </div>
    );
}