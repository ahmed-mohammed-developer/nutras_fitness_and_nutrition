import React from 'react'
import './Home.css'
import Typewriter from 'typewriter-effect';


const Home = () => {
  return (
    <div className='mt-5 home' id='#home'>
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
      </div>
    </div>
  )
}

export default Home
