import { VStack } from "@chakra-ui/layout";
import { ChakraProvider, Spinner, Button } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useToast } from "@chakra-ui/toast";

import axios from "axios";
import './Signup.css'
import { Link } from "react-router-dom";

import { useState } from "react";
import { useNavigate } from "react-router";

const Signup = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const toast = useToast();
    const navigate = useNavigate();
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const submitHandler = async () => {
        setIsLoading(true);
        if (!name || !password || !confirmpassword) {
            toast({
                title: "Please Fill all the Feilds",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "top",
            });
            setIsLoading(false);
            return;
        }
        if (password !== confirmpassword) {
            toast({
                title: "Passwords Do Not Match",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "top",
            });
            return;
        }
        // console.log("hellow" + name, password);
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            const { data } = await axios.post(
                "http://localhost:5000/api/user",
                {
                    name,
                    password,

                },
                config
            );
            console.log(data);
            toast({
                title: "Registration Successful",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "top",
            });
            localStorage.setItem("userInfo", JSON.stringify(data));
            setIsLoading(false);
            navigate("/profile");
        } catch (error) {
            toast({
                title: "Error Occured!",
                description: error.response.data.message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top",
            });
            setIsLoading(false);
        }
    };


    return (
        <ChakraProvider>
            <VStack spacing="5px" color={"black"} >

                <div className="registration-container">
                    <h1>Signup</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <div className="d-flex input-password">
                                <input
                                    type={show ? "text" : "password"}
                                    id="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <Button onClick={handleClick}>{show ? <ViewOffIcon /> : <ViewIcon />}</Button>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Confirm Password:</label>
                            <div className="d-flex input-password">
                                <input
                                    type={show ? "text" : "password"}
                                    id="password"
                                    value={confirmpassword}
                                    onChange={e => setConfirmpassword(e.target.value)}
                                />
                                <Button onClick={handleClick}>{show ? <ViewOffIcon /> : <ViewIcon />}</Button>
                            </div>
                        </div>
                        <Button
                            colorScheme="blue"
                            size="lg"
                            w="50%"
                            onClick={submitHandler}
                        >
                            {isLoading ? <Spinner
                                thickness="4px"
                                speed="0.65s"
                                emptyColor="gray.200"
                                color="blue.500"
                                size="xl"
                            />
                                :
                                "Signup"
                            }
                        </Button>
                        <p>
                            Do you have account ? <Link to={"/login"}>Login</Link>{" "}
                        </p>
                    </form>
                </div>


            </VStack>
        </ChakraProvider>
    );
};

export default Signup;
