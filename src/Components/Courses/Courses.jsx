import React from 'react'
import './Courses.css'
import Fade from 'react-reveal/Fade'


const Courses = () => {
    const coursDate = [
        {
            id: 1,
            img: "https://i.postimg.cc/63WpjtMN/1.png",
            price: "$14",
            author: "Ahmed Zakan",
            time: "08 hr 20 mins",
            Lectures: "28 Lectures",
            title: "Children Nutrition and Cooking"
        },
        {
            id: 2,
            img: "https://i.postimg.cc/CdT14Dtc/2.png",
            price: "$50",
            author: "Arlene Daniels",
            time: "09 hr 25 mins",
            Lectures: "16 Lectures",
            title: "Introduction to Food and Health."
        },
        {
            id: 3,
            img: "https://i.postimg.cc/26gvP1MZ/3.png",
            price: "$68",
            author: "Selina Benton",
            time: "03 hr 38 mins",
            Lectures: "18 Lectures",
            title: "Nutrition and Lifestyle in Pregnancy"
        },
        {
            id: 4,
            img: "https://i.postimg.cc/L5Nqmh0D/4.png",
            price: "$98",
            author: "Ryan Patterson",
            time: "02 hr 16 mins",
            Lectures: "14 Lectures",
            title: "Expertise on Fitness, Nutrition and Health"
        },
        {
            id: 5,
            img: "https://i.postimg.cc/T14Rkb4z/5.png",
            price: "$72",
            author: "Arlene Daniels",
            time: "06 hr 12 mins",
            Lectures: "35 Lectures",
            title: "Hacking exercise for health new science of fitness"
        },
        {
            id: 6,
            img: "https://i.postimg.cc/NF13XHw8/6.png",
            price: "$68",
            author: "Selina Benton",
            time: "09 hr 34 mins",
            Lectures: "28 Lectures",
            title: "Designing Your Personal Weight Loss Plan"
        }
    ]
  return (
    <div className='courses' id='courses-id'>
        <div className="container">
        <div className="section-title">
                    <h6 className="sub-title">100+ courses available</h6>
                    <h2 className="main-title">Fitness & Nutrition Courses</h2>
        </div>
        <div className="courses-wrapper">
        <Fade left>
                    <div className="row gx-xxl-5">
                    {coursDate.map((item, index) => (
                        <div className="col-lg-4 col-sm-6" key={index}>
                            <div className="single-courses">
                                <div className="courses-images">
                                    <a href="courses-details-left-sidebar.html">
                                        <img src={item.img} alt="courses" />
                                        </a>
                                </div>
                                <div className="courses-content">
                                    <div className="courses-price">
                                        <span className="price">{item.price}</span>
                                    </div>
                                    <div className="content-wrapper">
                                        <p className="author">By: <a href="#">{item.author}</a></p>
                                        <h4 className="title"><a href="courses-details-left-sidebar.html">{item.title}</a></h4>
                                        <ul className="meta">
                                            <li>{item.time}</li>
                                            <li>{item.Lectures}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
        </Fade>
                </div>
        </div>
    </div>
  )
}

export default Courses