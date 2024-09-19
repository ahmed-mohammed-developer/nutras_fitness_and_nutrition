import React from 'react'
import './Testimonial.css'
import Img1 from '../../assets/images/shape/shape-5.png'
import Img2 from '../../assets/images/shape/shape-6.png'
import Img3 from '../../assets/images/author/author-02.jpg'
import { TfiQuoteLeft } from "react-icons/tfi";




const Testimonial = () => {
  return (
    <div className='testimonial' id='testimonial-id'>
        <img src={Img1} alt="Img" className='img1'/>
        <img src={Img2} alt="Img" className='img2'/>
        <div className="container">


            <div className="title-tes">
                <h6 className='sub-title'>happy students</h6>
                <h2>What Client Say About Us</h2>
            </div>

            <div className="tes-wrapper">
                <div className="swiper-container">
                    <div className="swider-wrapper">
                        <div className="single-testimonal-author">
                            <div className="testimonal-author">
                                <img src={Img3} alt="Auther" />
                                <TfiQuoteLeft />
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nobis quasi, reiciendis accusamus optio provident laudantium. Qui dolor quis reprehenderit?</p>
                            <h4 className='name'>Pollock Austin</h4>
                            <span className='designation'>UI/UX</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial