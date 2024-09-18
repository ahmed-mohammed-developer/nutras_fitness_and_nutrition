import React from 'react'
import './Home.css'
import Typewriter from 'typewriter-effect';
import { FaFacebookF } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";






const Home = () => {
  return (
    <div className='pt-5 home' id='home-id'>
      <div className='container'>
      <div className="home-content">
        <h6>Fitness & Nutrition</h6>
            <h1>
            <Typewriter
            options={{
              strings: [
                'Healthy Living',
                 'Fit Fuel',
                 'Nourish Strong',
                 'Active Nutrition',
                ],
              autoStart: true,
                loop: true,
                delay:'natural',
            }}
      />
            </h1>
            <p>It has survived not only five centuries but also</p>
            <a href='#home' className="view-deatlis-home-buttom">View Detalis</a>
        </div>
        <div className="slider-social">
          <div className="social-wrapper">
            <p>Connect with us:</p>
            <ul className="social">
              <li><FaFacebookF size={13}/></li>
              <li><FaSkype size={13} /></li>
              <li><FaXTwitter size={13} /></li>
              <li><FaLinkedin size={13} /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
