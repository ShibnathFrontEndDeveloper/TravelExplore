import Header from "../Header";
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation,Pagination,Scrollbar,A11y} from 'swiper/modules';
import { FaBusAlt } from "react-icons/fa";
import { PiAirplaneTakeoffFill } from "react-icons/pi";
import { RiShip2Fill } from "react-icons/ri";
import { FaRupeeSign } from "react-icons/fa";
import {Link} from 'react-router-dom'
import 'swiper/css';
import 'swiper/css/navigation';
import './Home.css';
import AddPage from "./AddPage";
import Cleintreview from "./Cleintreview";
import Footer from "./Footer";
import TripCard from "./TripCard";



function Home() {

  return (
    <div>
        <Header/>
        <div className="home_swiper">
          <Swiper className="homeSwiper" modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          loop
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide className="homeSwiperSlide">
              <img src="./images/dino-reichmuth-A5rCN8626Ck-unsplash (1).webp" alt=""  className="img-fluid"/>
              <div className="addContent">
                <h2>Hilling Your Soul</h2>
                <p>typically refers to the process of addressing emotional or spiritual wounds, </p>
              </div>
              </SwiperSlide>
            <SwiperSlide className="homeSwiperSlide">
              <img src="./images/dino-reichmuth-A5rCN8626Ck-unsplash.webp" alt="" className="img-fluid"/>
              <div className="addContent">
                <h2>Hilling Your Soul</h2>
                <p>typically refers to the process of addressing emotional or spiritual wounds, </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="homeSwiperSlide">
              <img src="./images/dino-reichmuth-A5rCN8626Ck-unsplash (1).webp" alt="" className="img-fluid"/>
              <div className="addContent">
                <h2>Hilling Your Soul</h2>
                <p>typically refers to the process of addressing emotional or spiritual wounds, </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="homeSwiperSlide">
              <img src="./images/dino-reichmuth-A5rCN8626Ck-unsplash.webp" alt="" className="img-fluid"/>
              <div className="addContent">
                <h2>Hilling Your Soul</h2>
                <p>typically refers to the process of addressing emotional or spiritual wounds, </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="homeSwiperSlide">
              <img src="./images/dino-reichmuth-A5rCN8626Ck-unsplash (1).webp" alt="" className="img-fluid"/>
              <div className="addContent">
                <h2>Hilling Your Soul</h2>
                <p>typically refers to the process of addressing emotional or spiritual wounds, </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="homeSwiperSlide">
              <img src="./images/dino-reichmuth-A5rCN8626Ck-unsplash.webp" alt="" className="img-fluid"/>
              <div className="addContent">
                <h2>Hilling Your Soul</h2>
                <p>typically refers to the process of addressing emotional or spiritual wounds, </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <Container>
          <div className="travl_category_box">
            <div className="travl_sec_category">
              <div className="category_box">
                <FaBusAlt/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Temporibus numquam sapiente aut,</p>
              </div>
              <div className="category_box">
                <PiAirplaneTakeoffFill/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Temporibus numquam sapiente aut,</p>
              </div>
              <div className="category_box">
                <RiShip2Fill/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Temporibus numquam sapiente aut,</p>
              </div>
            </div>
          </div>
        </Container>

        <Container>
          <h2 className="text-center foreign_heading">Foreign Trip</h2>
          <Row>
            <Col lg={4} md={6}>
              <TripCard title='Maladives' subTitle='Two Nights' rupee="40,000.00"
               cobtent="The Maldives consists of 1,190 coral..." sale="Best Sale" 
               ImageSource="./images/Maldives.jpg"/>
            </Col>
            <Col lg={4} md={6}>
              <TripCard title='Malaysia' subTitle='Two Nights' rupee="40,000.00"
                cobtent="The Malaysia consists of 1,190 coral..." sale="Best Sale" 
                ImageSource="./images/malaysia2.jpg"/>
            </Col>
            <Col lg={4} md={6}>
              <TripCard title='London' subTitle='Two Nights' rupee="40,000.00"
                cobtent="The London consists of 1,190 coral..." sale="Best Sale" 
                ImageSource="./images/London.jpg"/>
            </Col>
            <Col lg={4} md={6}>
              <TripCard title='Florida' subTitle='Two Nights' rupee="40,000.00"
                  cobtent="The Florida consists of 1,190 coral..." sale="Best Sale" 
                  ImageSource="./images/Florida.jpg"/>
            </Col>
            <Col lg={4} md={6}>
              <TripCard title='Dubai' subTitle='Two Nights' rupee="40,000.00"
                  cobtent="The Dubai consists of 1,190 coral..." sale="Best Sale" 
                  ImageSource="./images/Dubai.jpg"/>
            </Col>
            <Col lg={4} md={6}>
            <TripCard title='Paris' subTitle='Two Nights' rupee="40,000.00"
                  cobtent="The Paris consists of 1,190 coral..." sale="Best Sale" 
                  ImageSource="./images/Paris.jpg"/>
            </Col>
          </Row>
        </Container>
        <AddPage/>
        <Container>
        <h2 className="text-center foreign_heading">Cleint Review</h2>
          <Cleintreview/>
        </Container>

        <Footer/>
        
    </div>
  )
}

export default Home