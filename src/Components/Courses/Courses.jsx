import React from 'react'
import './Courses.css'
import Courses2 from '../../assets/images/courses/courses-2.jpg'

const Courses = () => {
  return (
    <div className='courses' id='courses-id'>
        <div className="container">
        <div className="section-title">
                    <h6 className="sub-title">100+ courses available</h6>
                    <h2 className="main-title">Fitness & Nutrition Courses</h2>
        </div>
        <div className="courses-wrapper">
                    <div className="row gx-xxl-5">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-courses">
                                <div className="courses-images">
                                    <a href="courses-details-left-sidebar.html">
                                        <img src={Courses2} alt="courses" />
                                        </a>
                                </div>
                                <div className="courses-content">
                                    <div className="courses-price">
                                        <span className="price">$98</span>
                                    </div>
                                    <div className="content-wrapper">
                                        <p className="author">By: <a href="#">Ryan Patterson</a></p>
                                        <h4 className="title"><a href="courses-details-left-sidebar.html">Children Nutrition and Cooking</a></h4>
                                        <ul className="meta">
                                            <li>08 hr 20 mins</li>
                                            <li>28 Lectures</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Courses