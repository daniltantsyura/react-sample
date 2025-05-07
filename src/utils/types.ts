type TChat = {
    recipientName: string;
    id: string;
    timestamp: number;
    lastMessage: TMessage;
}

type TMessage = {
    text: string;
}