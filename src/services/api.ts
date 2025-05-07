import dayjs from "dayjs";

const chats: TChat[] = [
    {
        recipientName: 'Пёс',
        id: '1',
        lastMessage: {
            text: 'Привет. Кот заебал'
        },
        timestamp: dayjs('2025-05-07').valueOf()
    },
    {
        recipientName: 'Кот',
        id: '2',
        lastMessage: {
            text: 'Я насрал на ковер. Прийди, убери.'
        },
        timestamp: dayjs('2025-05-06').valueOf()
    },
    {
        recipientName: 'Конь',
        id: '3',
        lastMessage: {
            text: 'Сам виноват, что сзади подошел'
        },
        timestamp: dayjs('2025-05-06').valueOf()
    }
];

console.log(dayjs(chats[0].timestamp));

export const getChats = () => {
    return new Promise((resolve: (res: TChat[]) => void) => {
        setTimeout(() => {
            resolve(chats);
        }, 3000)
    })
}