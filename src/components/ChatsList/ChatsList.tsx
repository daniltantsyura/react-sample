import React, { ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

import styles from './chatsList.module.scss';
import { NavLink } from "react-router-dom";

type TChatsListProps = {
    chats: TChat[];
}

export const ChatsList = ({chats}: TChatsListProps): ReactElement => {
    return (
        <ul>
            {chats.map(({recipientName, id, timestamp, lastMessage},index) => (
                <li key={index}>
                    <NavLink to={{pathname: `/list/${id}`}} className={({isActive}) => isActive ? styles.activeChat : styles.chat}>
                        <div className={styles.chatContent}>
                            <div className={styles.info}>
                                <span>{recipientName}</span>
                                <span> {dayjs(timestamp).format('DD.MM.YYYY')}</span>
                            </div>
                            <div className={styles.lastMessage}>
                                <span>{lastMessage.text}</span>
                            </div>
                        </div>
                    </NavLink>
                </li>
            ))}
        </ul>
    );
}