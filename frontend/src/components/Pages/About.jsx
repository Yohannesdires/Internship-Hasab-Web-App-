import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook, FaTwitter, FaGithub, FaTelegram } from "react-icons/fa";
import { useState } from 'react';

function About() {

    const [toggle, setToggle] = useState(true);

    return (
        <div className="mt-0 mb-0">
            <div className="m-20 border-1 p-10 bg-white rounded-xl">
                <h1 className=" text-4xl font-bold text-center mt-1 font-sans">
                    Who are we?
                </h1>

                <div className="section-container lg:columns-2 md:columns-1 gap-10">
                    <div className="flex flex-col md:flex-row px-4 items-center ">
                        <img src="../images/stackeholders.jpg" className="rounded-2 mt-5" />
                    </div>

                    <div className="flex flex-col md:flex-row px-3 items-center">
                        <p className="pt-5 justify-center text-justify">
                            The{" "}
                            <span className="font-semibold">
                                Hasab</span>{" "}
                            is an innovative platform that enables
                            anyone to anonymously participate, ask questions,
                            and receive answers from a wide range of professionals.
                            Whether the user is seeking advice from psychologists, doctors,
                            therapists, or other experts, Hasab provides a safe
                            and secure space for the user to express their ideas freely.
                            .

                        </p>
                    </div>

                </div>

                {/* Missions and Vissions */}

                <section className="bg-white my-5 py-10">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="p-8 bg-white shadow-md transform hover:-translate-y-1 hover:shadow-lg transition duration-300">
                                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                                <p className="text-gray-600">
                                    Addressing the stigma surrounding mental health can help create a safe and supportive environment for individuals to seek help and share their experiences.
                                </p>
                            </div>
                            <div className="p-8 bg-white shadow-md transform hover:-translate-y-1 hover:shadow-lg transition duration-300">
                                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                                <p className="text-gray-600">
                                    solve the cause of  the stigma surrounding mental health can help create a safe and supportive environment for individuals to seek help and share their experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cards that show stackholders */}

                <section className="bg-white dark:bg-gray-900">
                    <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                        <div className="mx-auto max-w-screen-sm lg:mt-2 lg:mb-16 md:mb-10 sm:mb-10">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                                Our team
                            </h2>
                            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                                We’re a dynamic group of individuals who are passionate about
                                what we do.
                            </p>
                        </div>

                        <div className="grid -space-x-1  lg:gap-x-0 md:gap-7 sm:gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            <div className="card card-compact w-72 h-80 mx-4 md:mb-5 sm:mb-5 bg-base-100 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-md transition duration-300 shadow-xl">
                                <div className="text-center text-gray-500 mt-8 mb-8 pb-4 dark:text-gray-400">
                                    <img
                                        className="mx-auto mb-4 w-32 h-32 rounded-full "
                                        src="../images/Joye.jpg"
                                        alt=""
                                    />
                                    <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        <a href="#">Yohannes Dires</a>
                                    </h3>
                                    <p>Psychologist</p>
                                    <ul className="flex justify-center mt-4 space-x-3">
                                        <li>
                                            <a
                                                href="#"
                                                className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                                            >
                                                <svg
                                                    className="w-7 h-7 mt-1"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                                                    <FaFacebook />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                                            >
                                                <svg
                                                    className="w-8 h-7 mt-1"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                                                    <FaTwitter />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                                            >
                                                <svg
                                                    className="w-8 h-7 mt-1"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                                                    <FaGithub />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-[#3daded] hover:text-gray-900 dark:hover:text-white"
                                            >
                                                <svg
                                                    className="w-8 h-7 mt-1"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                                                    <FaTelegram />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card card-compact w-72 h-80 mx-4 md:mb-5 sm:mb-5 bg-base-100 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-md transition duration-300 shadow-xl">
                                <div className="text-center text-gray-500 mt-8 mb-8 pb-4 dark:text-gray-400">
                                    <img
                                        className="mx-auto mb-4 w-32 h-32 rounded-full "
                                        src="../images/Amsalu.jpg"
                                        alt=""
                                    />
                                    <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        <a href="#">Amsalu Mekuria</a>
                                    </h3>
                                    <p>Psychatrist</p>
                                    <ul className="flex justify-center mt-4 space-x-3">
                                        <li>
                                            <a
                                                href="#"
                                                className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                                            >
                                                <svg
                                                    className="w-7 h-7 mt-1"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                                                    <FaFacebook />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                                            >
                                                <svg
                                                    className="w-8 h-7 mt-1"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                                                    <FaTwitter />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                                            >
                                                <svg
                                                    className="w-8 h-7 mt-1"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                                                    <FaGithub />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-[#3daded] hover:text-gray-900 dark:hover:text-white"
                                            >
                                                <svg
                                                    className="w-8 h-7 mt-1"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                                                    <FaTelegram />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>


                            <div className="card card-compact w-72 h-80 mx-4 md:mb-5 sm:mb-5 bg-base-100 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-md transition duration-300 shadow-xl">
                                <div className="text-center text-gray-500 mt-8 mb-8 pb-4 dark:text-gray-400">
                                    <img
                                        className="mx-auto mb-4 w-32 h-32 rounded-full "
                                        src="../images/Awoke.jpg"
                                        alt=""
                                    />
                                    <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        <a href="#">Awoke Dejenie</a>
                                    </h3>
                                    <p>Relelationship export</p>
                                    <ul className="flex justify-center mt-4 space-x-3">
                                        <li>
                                            <a
                                                href="#"
                                                className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                                            >
                                                <svg
                                                    className="w-7 h-7 mt-1"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                                                    <FaFacebook />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                                            >
                                                <svg
                                                    className="w-8 h-7 mt-1"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                                                    <FaTwitter />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                                            >
                                                <svg
                                                    className="w-8 h-7 mt-1"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                                                    <FaGithub />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-[#3daded] hover:text-gray-900 dark:hover:text-white"
                                            >
                                                <svg
                                                    className="w-8 h-7 mt-1"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                                                    <FaTelegram />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card card-compact w-72 h-80 mx-4 md:mb-5 sm:mb-5 bg-base-100 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-md transition duration-300 shadow-xl">
                                <div className="text-center text-gray-500 mt-8 mb-8 pb-4 dark:text-gray-400">
                                    <img
                                        className="mx-auto mb-4 w-32 h-32 rounded-full "
                                        src="../images/Samri.jpg"
                                        alt=""
                                    />
                                    <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        <a href="#">Samrawit Fikadu</a>
                                    </h3>
                                    <p>Peer support specialist</p>
                                    <ul className="flex justify-center mt-4 space-x-3">
                                        <li>
                                            <a
                                                href="#"
                                                className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                                            >
                                                <svg
                                                    className="w-7 h-7 mt-1"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                                                    <FaFacebook />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                                            >
                                                <svg
                                                    className="w-8 h-7 mt-1"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                                                    <FaTwitter />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                                            >
                                                <svg
                                                    className="w-8 h-7 mt-1"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                                                    <FaGithub />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-[#3daded] hover:text-gray-900 dark:hover:text-white"
                                            >
                                                <svg
                                                    className="w-8 h-7 mt-1"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                                                    <FaTelegram />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default About;

