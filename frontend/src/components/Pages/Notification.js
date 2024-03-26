import React, { useState } from "react";
import "./Notification.css";

const NotificationsPage = () => {
    const [notifications, setNotifications] = useState([]);

    const handleNotification = () => {
        // Simulating a new notification
        const newNotification = {
            id: Date.now(),
            message: "New notification!",
        };

        setNotifications((prevNotifications) => [
            newNotification,
            ...prevNotifications,
        ]);
    };

    const handleClearNotifications = () => {
        setNotifications([]);
    };

    return (
        <div className="notifications-container">
            <h1>Notifications</h1>
            <button onClick={handleNotification}>Add Notification</button>
            <button onClick={handleClearNotifications}>Clear Notifications</button>
            <div className="notification-list">
                {notifications.map((notification) => (
                    <div className="notification" key={notification.id}>
                        {notification.message}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotificationsPage;