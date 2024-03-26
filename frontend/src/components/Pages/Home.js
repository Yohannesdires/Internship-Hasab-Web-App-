import React, { useState, useEffect } from 'react';
import './Home.css'; // Import the CSS file for styling
import 'bootstrap/dist/css/bootstrap.css';
import Search from '../search/Search';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    ChakraProvider,
    useDisclosure,
    Button,
    Input
} from '@chakra-ui/react'
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
// import Image from '../images/Image';
import { NavLink } from 'react-router-dom';
import BlogApp from './blogs/BlogApp';
import LoginPage from '../authentication/Login';
import About from './About';

export const Home = () => {
    const [data, setData] = useState([]);
    const [comment, setComment] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const handlecomment = async () => {
        const comment = await fetch('http://127.0.0.1:5000/api/comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                comment
            })

        })
        const json = await comment.json();
        setComment(json);
        console.log(json);
    }
    const fetchData = async () => {
        const response = await fetch('http://localhost:5000/api/vent/read');
        const json = await response.json();
        setData(json);
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ChakraProvider>
            <div className="container-fluid home row">

                <div className=' first' style={{ justifyContent: 'center', alignItems: 'center' }}>

                    <div className='justify-content-center align-items-center'>
                        <div className='d-flex flex-column' style={{ marginBottom: '1px', justifyContent: 'center', alignItems: 'center' }}>
                            <div className='text-center mt-4' style={{ fontSize: "34px", color: 'white', paddingTop: '5px' }}>
                                Unknown names endless possibilities.
                            </div>
                            <NavLink exact to="/login" style={{ textDecoration: 'none' }}>
                                <div className="" style={{ top: '10px', right: '0px', left: '100%' }}>
                                    <button className="button-view" onClick={<LoginPage />} style={{ backgroundColor: '#0892d0', color: 'white', border: 'none', borderRadius: '10px', fontSize: '20px' }}>
                                        Login
                                    </button>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>


                <div className="container-fluid row">
                    <div className="col-md-3 left-pane">
                        <Search />
                        <div className="video-container-wrapper">
                            <div className="video-container scrollable">
                                {/* YouTube Video Embed */}
                                <div style={{ border: '1px solid black' }}>
                                    <iframe className='frame'
                                        width="260"
                                        height="150"
                                        src="https://www.youtube.com/embed/VIDEO_ID"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    > </iframe>
                                    <p>video 1</p>
                                </div>
                                <div style={{ border: '1px solid black' }}>
                                    <iframe className='frame'
                                        width="260"
                                        height="150"
                                        src="https://www.youtube.com/embed/VIDEO_ID"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                    <p>video 2</p>
                                </div>
                                <div style={{ border: '1px solid black' }}>
                                    <iframe className='frame'
                                        width="260"
                                        height="150"
                                        src="https://www.youtube.com/embed/VIDEO_ID"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                    <p>video 3</p>
                                </div>
                                <div style={{ border: '1px solid black' }}>
                                    <iframe className='frame'
                                        width="260"
                                        height="150"
                                        src="https://www.youtube.com/embed/VIDEO_ID"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                    <p>video 4</p>
                                </div>
                                <div style={{ border: '1px solid black' }}>
                                    <iframe className='frame'
                                        width="260"
                                        height="150"
                                        src="https://www.youtube.com/embed/VIDEO_ID"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                    <p>video 5</p>
                                </div>
                                <div style={{ border: '1px solid black' }}>
                                    <iframe className='frame'
                                        width="260"
                                        height="150"
                                        src="https://www.youtube.com/embed/VIDEO_ID"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                    <p>video 6</p>
                                </div>
                                <div style={{ border: '1px solid black' }}>
                                    <iframe className='frame'
                                        width="260"
                                        height="150"
                                        src="https://www.youtube.com/embed/VIDEO_ID"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                    <p>video 7</p>
                                </div>
                            </div>
                            {/* Add more video containers */}
                        </div>
                    </div>
                    <div className="col-md-6 middle-pane" style={{ paddingTop: "3%" }}>
                        <div>
                            {
                                data.reverse().map((item) => {
                                    return (
                                        <div className="custom-width-70 font-bold border">
                                            <p>{item.message}
                                                <br />
                                                <MapsUgcIcon />
                                                <Button ref={btnRef} colorScheme='blue' size='sm' width={'30%'} onClick={onOpen}>
                                                    leave a comment
                                                </Button>
                                                <Drawer
                                                    isOpen={isOpen}
                                                    placement='right'
                                                    onClose={onClose}
                                                    finalFocusRef={btnRef}
                                                >
                                                    <DrawerOverlay />
                                                    <DrawerContent>
                                                        <DrawerCloseButton />
                                                        <DrawerHeader>Create your account</DrawerHeader>

                                                        <DrawerBody>
                                                            <Input placeholder='Type your comment...' value={comment} onChange={(e) => setComment(e.target.value)} />
                                                        </DrawerBody>

                                                        <DrawerFooter>
                                                            <Button variant='outline' mr={3} onClick={onClose}>
                                                                Cancel
                                                            </Button>
                                                            <Button onclick={handlecomment} colorScheme='blue'>Save</Button>
                                                        </DrawerFooter>
                                                    </DrawerContent>
                                                </Drawer>
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        {/* Content for the middle pane goes here */}

                    </div>
                    <div className="col-md-3 right-pane" >
                        <BlogApp />
                    </div>
                </div>
            </div>
            <About />

        </ChakraProvider>

    );
};