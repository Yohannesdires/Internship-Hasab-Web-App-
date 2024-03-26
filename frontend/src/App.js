import React, { useContext } from "react";
import "./App.css";
import axios from "axios";
import { useTranslation } from 'react-i18next';
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import About from "./components/Pages/About";
import Chat from "./components/Pages/Chat";
import GroupChat from "./components/Pages/GroupChat";
import Contact from "./components/Pages/Contact";
import Blog from "./components/Pages/Blog";
import Footer from "./components/footer/Footer";
import LoginPage from "./components/authentication/Login";
import SignUpPage from "./components/authentication/SignUp";
import { Profile } from "./components/profile/Profile";
import { UserContext, UserContextProvider } from "./components/context/UserContext";

function App() {
    const { islogin, name } = useContext(UserContext);

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <UserContextProvider>

            <Router>
                <NavBar />

                {/* <Image /> */}
                <div className="pages flex-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<SignUpPage />} />

                        <Route path="/profile" element={<Profile />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/chat" element={<Chat />} />
                        <Route path="/group" element={<GroupChat />} />
                    </Routes>
                </div>

                <Footer />
            </Router>
        </UserContextProvider>
    );
}

export default App;