import { Link } from 'react-router-dom';

import styles from './notFoundPage.module.scss';
import notFoundImage from '../../assets/images/404.jpg';

export const NotFoundPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <img alt="page nor found" src={notFoundImage} />
                <br />
                <Link to='/list' className={styles.link}>Перейти в список чатов</Link>
            </div>
        </div>
    );
}