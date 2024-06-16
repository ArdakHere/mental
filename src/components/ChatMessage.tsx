import React from 'react';

interface ChatMessageProps {
    message: string;
    sender: 'user' | 'bot';
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, sender }) => {
    return (
        <div className={`chat-message ${sender}`}>
            <p>{message}</p>
        </div>
    );
};

export default ChatMessage;


