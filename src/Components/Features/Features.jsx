import React from 'react'
import { FaRunning } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiFlowerLine } from "react-icons/ri";
import { GrRestroomWomen } from "react-icons/gr";
import Fade from 'react-reveal/Fade'



import './Features.css'



const Features = () => {
  return (
    <div className='features' id='features-id'>
      <div className="container">
        <div className="features-wrapper">
          <div className="row">
          <Fade left>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature">
                <div className="feature-icon">
                  <span><GrRestroomWomen /></span>
                </div>
                <div className="feature-content">
                  <div className="content-wer">
                    <h4 className='title'>Women's Course</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis similique illum in quisquam et fugiat fuga consequuntur?</p>
                  </div>
                  <span className='roww'><FaArrowRightLong  /> </span>
                </div>
              </div>
            </div>
            </Fade>


            <Fade top>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature active">
                <div className="feature-icon">
                  <span><RiFlowerLine /> </span>
                </div>
                <div className="feature-content">
                  <div className="content-wer">
                    <h4 className='title'>Basice Course</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis similique illum in quisquam et fugiat fuga consequuntur?</p>
                  </div>
                  <span className='roww'><FaArrowRightLong  /> </span>
                </div>
              </div>
            </div>
            </Fade>


            <Fade right>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature">
                <div className="feature-icon">
                  <span><FaRunning  /></span>
                </div>
                <div className="feature-content">
                  <div className="content-wer">
                    <h4 className='title'>Men's Course</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis similique illum in quisquam et fugiat fuga consequuntur?</p>
                  </div>
                  <span className='roww'><FaArrowRightLong  /> </span>
                </div>
              </div>
            </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
