import { VStack } from "@chakra-ui/layout";
import { ChakraProvider, Button, Spinner } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import "./LoginPage.css";
import { Link } from "react-router-dom";
const LoginPage = () => {
    const [show, setShow] = useState(false);
    const handleClick = (e) => {
        setShow(!show);
        e.preventDefault();
    }
    const toast = useToast();
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const submitHandler = async () => {
        setLoading(true);
        if (!name || !password) {
            toast({
                title: "Please Fill all the Feilds",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "top",
            });
            setLoading(false);
            return;
        }

        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };

            const { data } = await axios.post(
                "http://localhost:5000/api/user/login",
                { name, password },
                config
            );

            toast({
                title: "Login Successful",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "top",
            });
            // setUser(data);
            localStorage.setItem("userInfo", JSON.stringify(data));
            setLoading(false);
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
            setLoading(false);
        }
    };

    return (
        <ChakraProvider>
            <VStack spacing="10px" >
                <div className="login-container">
                    <h1>Login</h1>
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
                        <Button
                            colorScheme="blue"
                            size="lg"
                            w="50%"
                            onClick={submitHandler}
                        >
                            {loading ? <Spinner
                                thickness="4px"
                                speed="0.65s"
                                emptyColor="gray.200"
                                color="blue.500"
                                size="xl"
                            />
                                :
                                "Login"
                            }
                        </Button>
                        <p>
                            Havn't you account ? <Link to={"/register"}>Register</Link>
                        </p>
                    </form>
                </div>
            </VStack>
        </ChakraProvider>
    );
};

export default LoginPage;
