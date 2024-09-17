import React from 'react'
import { FaRunning } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import './Features.css'



const Features = () => {
  return (
    <div className='features'>
      <div className="container">
        <div className="features-wrapper">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-feature">
                <div className="feature-icon">
                  <span><FaRunning  /></span>
                </div>
                <div className="feature-content">
                  <div className="content-wer">
                    <h4 className='title'>Running Course</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis similique illum in quisquam et fugiat fuga consequuntur?</p>
                  </div>
                  <span><FaArrowRightLong  /> </span>
                </div>
              </div>
            </div>


            <div className="col-lg-4 col-md-6">
              <div className="single-feature active">
                <div className="feature-icon">
                  <span><FaRunning  /></span>
                </div>
                <div className="feature-content">
                  <div className="content-wer">
                    <h4 className='title'>Running Course</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis similique illum in quisquam et fugiat fuga consequuntur?</p>
                  </div>
                  <span><FaArrowRightLong  /> </span>
                </div>
              </div>
            </div>



            <div className="col-lg-4 col-md-6">
              <div className="single-feature">
                <div className="feature-icon">
                  <span><FaRunning  /></span>
                </div>
                <div className="feature-content">
                  <div className="content-wer">
                    <h4 className='title'>Running Course</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis similique illum in quisquam et fugiat fuga consequuntur?</p>
                  </div>
                  <span><FaArrowRightLong  /> </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
