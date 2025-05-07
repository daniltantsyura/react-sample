import { ReactElement } from "react";
import { Link, Outlet } from "react-router-dom";

export const ProfileLayout = (): ReactElement => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to='/profile'>Профиль</Link></li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
} 