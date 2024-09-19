import React from 'react'
import './Testimonial.css'
import Img1 from '../../assets/images/shape/shape-5.png'
import Img2 from '../../assets/images/shape/shape-6.png'
import Img3 from '../../assets/images/author/author-02.jpg'
import { TfiQuoteLeft } from "react-icons/tfi";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





const Testimonial = () => {

    const testimonalDate = [
        {
            id: 1,
            p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nobis quasi, reiciendis accusamus optio provident laudantium. Qui dolor quis reprehenderit?",
            name: "Pollock Austin",
            designation: "UI/UX Designer",
        },
        {
            id: 2,
            p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nobis quasi, reiciendis accusamus optio provident laudantium. Qui dolor quis reprehenderit?",
            name: "John Smith",
            designation: "Full-Stack Development",
        },
        {
            id: 3,
            p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nobis quasi, reiciendis accusamus optio provident laudantium. Qui dolor quis reprehenderit?",
            name: "Emily Johnson",
            designation: "Digital Marketing",
        },
        {
            id: 4,
            p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nobis quasi, reiciendis accusamus optio provident laudantium. Qui dolor quis reprehenderit?",
            name: "Michael Brown",
            designation: "Investment Analysis",
        }
    ]

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        initialSlide: 0,
        rows:1,
        slidesPerRow:1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 3,
                autoplay: false,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                autoplay: true,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                autoplay: true,
                slidesToScroll: 1
              }
            }
          ]
      };



  return (
    <div className='testimonial' id='testimonial-id'>
        <motion.div
      animate={{ y: [0, -30, 0] }}
      transition={{ duration: 2, repeat: Infinity }} >
      <img src={Img1} alt="Img" className='img1'/>
        </motion.div>
        <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 2, repeat: Infinity }} >
      <img src={Img2} alt="Img" className='img2'/>
        </motion.div>
        <div className="container">


            <div className="title-tes">
                <h6 className='sub-title'>happy students</h6>
                <h2>What Client Say About Us</h2>
            </div>

            <div className="tes-wrapper">
                <div className="swiper-container">
                    <div className="swider-wrapper">
                      <div className="row">
                      <Slider {...settings}>
                      {testimonalDate.map((item, index) => (
                        <div className="col-lg-12" key={index}>
                        <div className="single-testimonal-author">
                            <div className="testimonal-author">
                                <img src={Img3} alt="Auther" />
                                <TfiQuoteLeft className='icon-tes'/>
                            </div>
                            <p>{item.p}</p>
                            <h4 className='name'>{item.name}</h4>
                            <span className='designation'>{item.designation}</span>
                        </div>
                        </div>
                                            ))}
                                                                </Slider>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial