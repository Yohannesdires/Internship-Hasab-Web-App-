import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import { FaTelegram, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="footer ">

            <div className=' row  '>
                <div className="col-md-3 customer row footer-links">
                    <h3 className=''>customer service</h3>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="#">Rule and Policy</Link>
                    <Link to="#">FAQs</Link>
                </div>
                <div className="col-md-6">
                    <div className='text-center '>
                        <h3 className='  '>About Us</h3>
                        <p className='mb-2 footer-text'> Our hasab provide anoymomity  </p>

                    </div>
                </div>
                <div className="col-md-3  ">
                    <ul className="footer-links row justify-content-end text-center">
                        <li><Link to="/"><FaTelegram /> Telegram</Link></li>
                        <li><Link to="/about"><FaFacebook /> Facebook</Link></li>
                        <li><Link to="/contact"><FaTwitter /> Twitter</Link></li>
                        <li><Link to="/contact"><FaInstagram /> Instagram</Link></li>
                    </ul>
                </div>
                <div>
                    <p className='footer-text' style={{ alignItems: 'center', marginLeft: '35%' }}>&copy; 2023 hasab. All rights reserved.</p>
                </div>
            </div>



        </footer >
    );
};

export default Footer;