import React from 'react'
import './About.css'
import Shap from '../../assets/images/shape/shape-2.png'
import Aboutimg from '../../assets/images/about.jpg'
import Shap1 from '../../assets/images/shape/shape-1.png'



const About = () => {
  return (
    <div className='about' id='about-id'>
      <div className="container">
        <div className="about-wra">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className="about-img">
                        <img src={Shap} alt="shap" className='shape' />
                        <div className="img">
                            <img src={Aboutimg} alt="aboutimg" />
                        </div>
                        <div className="about-btn">
                        <button class="btn btn-primary btnabout" type="submit">Meet Instructor</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="about-content bg-white">
                        <img src={Shap1} alt="shap" />
                        <div class="content-wrapper">
                                    <h6 class="sub-title">25+ years of experience</h6>
                                    <h2 class="main-title">We have expert instructor for help our students.</h2>
                                    <p>Lorem Ipsum is simply dummy text the printing and typesetting standard dummy text ever since the 150 when an unknown printe specimen book has survived centuries. </p>
                                    <span class="count">100+ Courses</span>
                                    <p>Lorem Ipsum is simply dummy text the printing and typesetting standard dummy text ever since the 150 when an unknown printe specimen book has survived centuries.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
