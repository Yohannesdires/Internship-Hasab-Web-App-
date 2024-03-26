import React, { useState, useEffect, useRef } from "react";
import "./GroupChat.css";

const GroupChat = () => {
    const [messages, setMessages] = useState([
        {
            content: "Hello everyone!",
            timestamp: "10:00 AM",
        },
        {
            content: "How's everyone doing?",
            timestamp: "10:05 AM",
        },
        {
            content: "I'm excited to be here!",
            timestamp: "10:10 AM",
        },
    ]);

    const [newMessage, setNewMessage] = useState("");
    const chatContainerRef = useRef(null);

    useEffect(() => {
        // Scroll to bottom of chat container when new messages are added
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }, [messages]);

    const handleSendMessage = () => {
        if (newMessage.trim() !== "") {
            const message = {
                content: newMessage,
                timestamp: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                }),
            };
            setMessages([...messages, message]);
            setNewMessage("");
        }
    };

    return (
        <div className="group-chat-container">
            <div className="chat-header">
                <h2>Group Chat</h2>
            </div>
            <div className="chat-messages" ref={chatContainerRef}>
                {messages.map((message, index) => (
                    <div key={index} className="chat-message">
                        <div className="message-content">{message.content}</div>
                        <div className="message-timestamp">{message.timestamp}</div>
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default GroupChat;