import React, { useState, useRef } from 'react';
//import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
//import emailjs from '@emailjs/browser';
import axios from 'axios';
import "./Contact.css";
import { useToast } from "@chakra-ui/react";
import { ChakraProvider, Button, Text, Box, Icon, Spinner } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();

    const form = useRef();
    const HandleSubmit = async (event) => {
        event.preventDefault();

        setIsLoading(true);

        emailjs.sendForm('service_0a0l7kp',
            'template_orivcky',
            form.current, 'k0FfFK_lalSy7U739')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        // const sendEmail = (e) => {


        //const contactmessage = await axios.post('/contact')
        axios.post("http://localhost:5000/api/contact/create", {
            name,
            email,
            phone,
            message,
        })
            .then((res) => {
                if (name === "" || !email || !phone || !message) {
                    toast({
                        title: "Please Fill all the Feilds",
                        status: "warning",
                        duration: 5000,
                        isClosable: true,
                        position: "top",
                    });
                    setIsLoading(false);
                } else {
                    toast({
                        title: "Message sent successfully! Thanks you",
                        status: "success",
                        duration: 5000,
                        isClosable: true,
                        position: "top",
                    });
                    setIsLoading(false);
                    setName('');
                    setEmail('');
                    setPhone('');
                    setMessage('');
                }

            })
            .catch((err) => {
                toast({
                    title: "Please Fill all the Feilds",
                    status: "warning",
                    duration: 5000,
                    isClosable: true,
                    position: "top",
                });
                setIsLoading(false);
            });
    };

    return (
        <ChakraProvider>

            <section className="page-section" id="contact">
                <div className="container-fluid">
                    <div className="row">
                        <div className=" tittle ">
                            <h2 className=" section-heading text-uppercase">contactus</h2>
                            {/* <h3 className="section-subheading text-muted">Eye Bank Center</h3> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <form ref={form}
                                id="contactForm"
                                onSubmit={HandleSubmit}
                                name="contactForm"
                                noValidate
                            >
                                <div className="inputForm row">

                                    <div className="col-sm-6 col-md-8 ">
                                        <div className="form-group">

                                            <input
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                type="text"
                                                value={name}
                                                onChange={e => setName(e.target.value)}
                                                placeholder='name'
                                                required
                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                className="form-control "
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                                placeholder='email'
                                                required
                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                value={phone}
                                                onChange={e => setPhone(e.target.value)}
                                                placeholder='phone'
                                                required
                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="form-group">
                                            <textarea
                                                className="form-control"
                                                id="message"
                                                name="message"
                                                value={message}
                                                onChange={e => setMessage(e.target.value)}
                                                placeholder="message"
                                                required
                                            ></textarea>
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className='form-group text-center '>
                                            <Button colorScheme="blue"
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
                                    </div>

                                    <div className="contact col-sm-7 col-md-4">
                                        <ChakraProvider>
                                            <Box className="flex mt-4">
                                                <PhoneIcon boxSize={7} color="slateblue" />
                                                <Box style={{ padding: 0 }}>
                                                    <Text>phone</Text>
                                                    <Text>+2519334657</Text>
                                                    <Text>+251933433333</Text>
                                                </Box>
                                            </Box>
                                            <Box className="flex mt-2">
                                                <Icon as={EmailIcon} boxSize={7} color="slateblue" />
                                                <Box>
                                                    <Text>email</Text>
                                                    <Text>hasab@gmail.com</Text>
                                                </Box>
                                            </Box>
                                            <Box className="flex mt-2">
                                                <Icon as={FaMapMarkerAlt} boxSize={7} color="slateblue" />
                                                <Box>
                                                    <Text>Address</Text>
                                                    <Text>4 killo, Awari</Text>
                                                </Box>
                                            </Box>
                                        </ChakraProvider>
                                    </div>

                                    <div className='addresss col-lg-12'>
                                        <p> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.401682902298!2d38.77283140762485!3d9.027072690996787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85899f2f80c5%3A0x33cf037bfbfab412!2zQXdhcmUgU3F1YXJlIHwg4Yqg4YuL4YisIOGKoOGLsOGJo-GJo-GLrQ!5e0!3m2!1sen!2set!4v1702877439228!5m2!1sen!2set" width="800" height="600" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </ChakraProvider>
    );
};

export default Contact;