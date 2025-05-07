import { ReactElement, useEffect, useState } from "react";
import listStyles from './listPage.module.scss';
import { ChatsList } from "../../components/ChatsList/ChatsList";
import { getChats } from "../../services/api";
import { useLoaderData } from "react-router-dom";

export const ListPage = () => {
    const [loading, setLoading] = useState(false);
    const [chats, setChats] = useState<TChat[]>([] as TChat[]);

    const content = loading ? (
        'loading'
    ) : chats && chats.length ? (
        <ChatsList chats={chats}/>
    ) : null;

    const getChatsData = async () => {
        setLoading(true);
        try {
            const chats = await getChats();
            setChats(chats);
        } catch(err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getChatsData();
    }, []);

    return (
        <div className={listStyles.container}>
            <div className={listStyles.list}>
                {content}
            </div>
        </div>
    );
}

