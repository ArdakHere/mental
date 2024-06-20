import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { Message } from './types'; // Assuming you have a types file
import { useTranslation } from 'react-i18next';
const VITE_OPENAI_API_KEY = "";

const ChatComponent = () => {
    
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState<string>('');

    // Fetching response from OpenAI
    const getOpenAIResponse = async (prompt: string): Promise<string> => {
        
        const url = "https://api.openai.com/v1/chat/completions";
        const payload = {
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "You are a mental health counselor, your role is to provide empathetic and supportive responses..."
                },
                {
                    role: "user",
                    content: prompt
                }
            ]
        };
        const headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${VITE_OPENAI_API_KEY}`
        };

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            return data.choices[0]?.message?.content || "No response content";
        } catch (error) {
            console.error("Failed to fetch from OpenAI:", error);
            return "Error fetching response";
        }
    };

    // Handling sending messages
    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { message: input, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInput('');

        const response = await getOpenAIResponse(input);
        const botMessage = { message: response, sender: 'bot' };
        setMessages(prev => [...prev, botMessage]);
    };

    // Initialize with welcome message
    const { t } = useTranslation();
    
    useEffect(() => {
        setMessages([{ message: t('mentai_first_message') + ' 🙂', sender: 'bot' }]);
    }, [t]);

   

    // Handle Enter key press to send message
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSend();
        }
    };


    return (
        <div className="chat_page-container">
            <h1>{t('chat')} 🤖</h1>

            <div className="chat-container">
                <div className="chat-messages">
                    {messages.map((msg, index) => (
                        <ChatMessage key={index} message={msg.message} sender={msg.sender} />
                    ))}
                </div>
                <div className="chat-input">
                    <input
                        type="text"
                        
                        value={input}
                        placeholder= {t('prompt_window_hint')}
                        onKeyDown={handleKeyPress}
                        onChange={(e) => setInput(e.target.value)
                        }
                    />
                    <button onClick={handleSend}>{t('send_prompt')}</button>
                </div>
            </div>
        </div>
    );
};

export default ChatComponent;
