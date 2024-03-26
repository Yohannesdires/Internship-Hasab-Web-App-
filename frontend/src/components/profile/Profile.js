import React, { useState, useEffect, useContext } from "react";
import "./Profile.css"; // Import the CSS file for styling
import "bootstrap/dist/css/bootstrap.css";
import Search from "../search/Search";
import { useNavigate } from "react-router";
import { UserContext } from "../context/UserContext";
import { useToast } from "@chakra-ui/react";
import { ChakraProvider, Button, Text, Box, Icon, Spinner } from "@chakra-ui/react";
export const Profile = () => {
    const data = [
        { name: "Awoke", image: "/awoke.jpg" },
        { name: "Amsalu", image: "/Amsalu.jpg" },
        { name: "Yohnnis ", image: "/yoha.jpg" },
        { name: "Samrawit ", image: "/samri.jpg" },
        // Add more data as needed
    ];
    const [vent, setVent] = useState([]);
    const [count, setCount] = useState(0);
    const { Logname } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();
    const [refreshData, setRefreshData] = useState(false);
    function formatTimestamp(timestamp) {
        const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        };

        return new Date(timestamp).toLocaleString('en-US', options);
    }
    const fetchData = async () => {
        const response = await fetch("http://localhost:5000/api/vent/read");
        const json = await response.json();
        setVent(json);
        setCount(count + 1);
    };
    useEffect(() => {
        fetchData();
    }, []);
    const navigate = useNavigate();
    const handlegroup = () => {
        navigate("/group");
    };
    const [message, setMessage] = useState("");
    useEffect(() => {
        // Fetch the data or perform any other actions that need to be refreshed
        fetchData();
    }, [refreshData]);
    const handledata = async () => {
        setIsLoading('');
        if (message === "") {
            alert("Please enter a message");
        } else {
            try {
                const messages = await fetch("http://127.0.0.1:5000/api/vent/post", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ message }),
                });
                setRefreshData(!refreshData);
                const data = await messages.json();
                console.log(data);
                if (data) {
                    toast({
                        title: "Message sent primary successfully! Thanks you",
                        status: "primary",
                        duration: 5000,
                        isClosable: true,
                        position: "top",
                    });
                    setIsLoading(false);
                    setMessage("");
                }
            } catch (error) { }
        }

    };
    //const user = localStorage.getItem("userInfo");
    const handlechat = () => {
        navigate("/chat");
    };
    return (
        <ChakraProvider>
            <div className=" pro container-fluid">
                <div className="row">
                    <div className="col-md-2  profile-left-pane">
                        <div className="col-12 ">
                            <button
                                className="btn btn-primary btn-block custom-width-70 "
                                style={{ width: "150px", marginTop: "40px" }}
                            >
                                {" "}
                                profile
                            </button>
                        </div>
                        <div className="my-2">
                            <button
                                className="btn btn-primary btn-block custom-width-90"
                                style={{ width: "145px", marginTop: "20px" }}
                            >
                                {/* {user.name}
                            {user.token} */}
                                username
                                {Logname}
                            </button>
                        </div>
                        <div className="my-2">
                            <button
                                onClick={handlegroup}
                                className="btn btn-primary btn-block custom-width-70 "
                                style={{ width: "145px", marginTop: "20px" }}
                            >
                                {" "}
                                Group
                            </button>
                        </div>
                        <div className="my-2">
                            <button
                                onClick={handlechat}
                                className="btn btn-primary btn-block custom-width-70 "
                                style={{ width: "145px", marginTop: "20px" }}
                            >
                                {" "}
                                Chat
                            </button>
                        </div>
                        <div className="my-2">
                            <button
                                className="btn btn-primary btn-block custom-width-70"
                                style={{ width: "150px", marginTop: "20px" }}
                            >
                                Videos{" "}
                            </button>
                        </div>
                    </div>

                    <div
                        className="col-md-7 middle-pane "
                        style={{ boxShadow: "0px 0px 12px 0px" }}
                    >
                        <h2 className="text-center">Type new vent</h2>
                        <div className="text-center ">
                            <textarea onSubmit={handledata}
                                className="form-control mx-5 "
                                style={{ width: "70%", height: "100px" }}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Vent here"
                            ></textarea>

                            <Button colorScheme="blue"
                                onClick={handledata}
                                title='Sent your message'
                                className="btn btn-primary btn-xl mr-8"
                                disabled={isLoading} // Disable the button when loading is true
                                type="submit"
                                value="Send"
                            >
                                {isLoading ? <Spinner
                                    thickness="4px"
                                    speed="0.65s"
                                    emptyColor="gray.200"
                                    color="blue.500"
                                    size="xl"
                                />
                                    :
                                    "Send Message"
                                }
                            </Button>
                        </div>
                        <hr />
                        <div
                            className="text-center"
                            style={{ height: "370px", overflow: "scroll" }}
                        >
                            <div className="card">
                                <div className="card-body shadow-sm">
                                    <h3 className="card-title"> Your Recent Vents</h3>
                                    <div
                                        style={{
                                            height: "90px",
                                            overflowY: "scroll",
                                            overflowX: "hidden",
                                        }}
                                    >
                                        <div>
                                            {vent.reverse().map((item) => {
                                                return (
                                                    <div className="message-container">
                                                        <p className="custom-width-70 font-bold border">
                                                            {item.message}
                                                            <br />
                                                            <span className="timestamp font-normal">{formatTimestamp(item.createdAt)}</span>
                                                        </p>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <span className="text-center text-blue">
                                            Reaction<sup className="text-green">{count}</sup>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card">
                                    <div
                                        className="card-body"
                                        style={{ maxHeight: "300px", overflowY: "scroll" }}
                                    >
                                        <div
                                            className="text-center"
                                            style={{ background: "#8AAAE5" }}
                                        >
                                            <details>
                                                <summary>Comments</summary>
                                                <div style={{ overflowY: "scroll", overflowX: "hidden" }}>
                                                    <p className="custom-width-70 border">
                                                        Your comments will be displayed here. The target is to
                                                        do the best and be interested in the life you are
                                                        interested in. Your comments will be displayed here.
                                                        The target is to do the best and be interested in the
                                                        life you are interested in. be displayed here. The
                                                        target is to do the best and be interested in the life
                                                        you are interested in. Your comments will be displayed
                                                        here. The taerested in. Your comments will be
                                                        displayed here. The target is to do the best and be
                                                        interested in the life you are interested in. be
                                                        displayed here. The target is to do the best and be
                                                        interested in the life you are interested in. Your
                                                        comments will be displayed here. The taerested in.
                                                        Your comments will be displayed here. The target is to
                                                        do the best and be interested in the life you are
                                                        interested in. be displayed here. The target is to do
                                                        the best and be interested in the life you are
                                                        interested in. Your comments will be displayed here.
                                                        The taerested in. Your comments will be displayed
                                                        here. The target is to do the best and be interested
                                                        in the life you are interested in. be displayed here.
                                                        The target is to do the best and be interested in the
                                                        life you are interested in. Your comments will be
                                                        displayed here. The taerested in. Your comments will
                                                        be displayed here. The target is to do the best and be
                                                        interested in the life you are interested in. be
                                                        displayed here. The target is to do the best and be
                                                        interested in the life you are interested in. Your
                                                        comments will be displayed here. The tae life you are
                                                        interested in. be displayed here. The target is to do
                                                        the best and be interested in the life you are
                                                        interested in. Your comments will be displayed here.
                                                        The target is to do the best and be interested in the
                                                        life you are interested in.
                                                    </p>
                                                </div>
                                            </details>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 right-pane">
                        <Search size="12px" />
                        <ul className="">
                            {data.map((item, index) => (
                                <li className="my-3 list-unstyled " key={index}>
                                    <img
                                        src={item.image}
                                        alt="a"
                                        className="img-thumbnail"
                                        style={{ width: "70px", height: "70px" }}
                                    />
                                    <span className="name" style={{ fontSize: "22px", }}>
                                        {item.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        {/* Content for the right pane goes here */}
                    </div>
                </div>
            </div>
        </ChakraProvider>
    );
};
