import React, { useState } from 'react';
import './ChatPage.css';

const ChatPage = () => {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            setChatHistory([...chatHistory, message]);
            setMessage('');
        }
    };

    return (
        <div className="chat-page">
            <div className="chat-container">
                <div className="chat-history">
                    {chatHistory.map((msg, index) => (
                        <div key={index} className="message">
                            {msg}
                        </div>
                    ))}
                </div>
                <div className="chat-input">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type a message..."
                    />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default ChatPage;