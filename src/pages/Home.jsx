import Header from "../Header";
import Container from "react-bootstrap/esm/Container";
// import Button from 'react-bootstrap/Button';
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
// import Form from 'react-bootstrap/Form';
// import { useState } from "react";



function Home() {
//  const [validated, setValidated] = useState(false);

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);
//   };
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
        {/* <Container>
            <div className="position_container">
              <div className="position_Row">
                <div className="position_box1">
                  <div className="position_box_heading">
                    <h4>Search your destination</h4>
                  </div>
                  <Form noValidate validated={validated} onSubmit={handleSubmit} className="mt-4">
                    <Form.Group className="mb-3">
                      <Form.Check required
                        label="For Place"
                        feedback="You must select before submitting."
                        feedbackType="invalid"
                      
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Check required
                        label="For Date"
                        feedback="You must select before submitting."
                        feedbackType="invalid"
                      
                      />
                    </Form.Group>
                    <Form.Control type="date"  feedback="You must select date."
                        feedbackType="invalid"/>
                    <Form.Range />
                    <Button type="submit">Submit form</Button>
                  </Form>
                </div>
                <div className="position_box2">
                  <div className="position_content">
                    <div className="position_content_box">
                      <img src={'./images/malaysia.jpg'} width={'100%'} alt="" />
                    </div>
                    <div className="position_content_box">
                      <img src={'./images/malaysia.jpg'} width={'100%'} alt="" />
                    </div>
                    <div className="position_content_box">
                      <img src={'./images/malaysia.jpg'} width={'100%'} alt="" />
                    </div>
                    <div className="position_content_box">
                      <img src={'./images/malaysia.jpg'} width={'100%'} alt="" />
                    </div>
                    <div className="position_content_box">
                      <img src={'./images/malaysia.jpg'} width={'100%'} alt="" />
                    </div>
                    <div className="position_content_box">
                      <img src={'./images/malaysia.jpg'} width={'100%'} alt="" />
                    </div>
                    <div className="position_content_box">
                      <img src={'./images/malaysia.jpg'} width={'100%'} alt="" />
                    </div>
                    <div className="position_content_box">
                      <img src={'./images/malaysia.jpg'} width={'100%'} alt="" />
                    </div>
                    <div className="position_content_box">
                      <img src={'./images/malaysia.jpg'} width={'100%'} alt="" />
                    </div>
                    <div className="position_content_box">
                      <img src={'./images/malaysia.jpg'} width={'100%'} alt="" />
                    </div>
                    <div className="position_content_box">
                      <img src={'./images/malaysia.jpg'} width={'100%'} alt="" />
                    </div>
                    <div className="position_content_box">
                      <img src={'./images/malaysia.jpg'} width={'100%'} alt="" />
                    </div>
                    <div className="position_content_box">
                      <img src={'./images/malaysia.jpg'} width={'100%'} alt="" />
                    </div>
                    <div className="position_content_box">
                      <img src={'./images/malaysia.jpg'} width={'100%'} alt="" />
                    </div>
                    <div className="position_content_box">
                      <img src={'./images/malaysia.jpg'} width={'100%'} alt="" />
                    </div>
                    <div className="position_content_box">
                      <img src={'./images/malaysia.jpg'} width={'100%'} alt="" />
                    </div>
                    <div className="position_content_box">
                      <img src={'./images/malaysia.jpg'} width={'100%'} alt="" />
                    </div>
                    <div className="position_content_box">
                      <img src={'./images/malaysia.jpg'} width={'100%'} alt="" />
                    </div>
                    <div className="position_content_box">
                      <img src={'./images/malaysia.jpg'} width={'100%'} alt="" />
                    </div>
                    <div className="position_content_box">
                      <img src={'./images/malaysia.jpg'} width={'100%'} alt="" />
                    </div>
                    <div className="position_content_box">
                      <img src={'./images/malaysia.jpg'} width={'100%'} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </Container> */}

        <Container>
          <h2 className="text-center foreign_heading">Foreign Trip</h2>
          <Row>
            <Col lg={4} md={6}>
              <div className="tourList_box">
                <div className="tourList_dtls_box">
                  <div className="listImg_box">
                    <Link><img src="./images/Maldives.jpg" alt=""/></Link>
                  </div>
                  <div className="listText_box px-3">
                    <Link><h2>Maldives<span>(See beach beautiful site)</span></h2></Link>
                    <div className="listText_price_box">
                      <div className="listText_tag_box">
                        <h2>Tow Nights</h2>
                      </div>
                      <div className="listText_tag_box listText_tagPrice_box">
                        <h2><FaRupeeSign/>40,000.00</h2>
                      </div>
                    </div>
                    <div className="listText_tag_box_articles">
                        <p>The Maldives consists of 1,190 coral...</p>
                    </div>
                  </div>
                  <div className="addTag_box">
                    <p>Best Seller</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="tourList_box">
                <div className="tourList_dtls_box">
                  <div className="listImg_box">
                    <Link><img src="./images/malaysia2.jpg" alt=""/></Link>
                  </div>
                  <div className="listText_box px-3">
                    <Link><h2>Maldives<span>(See beach beautiful site)</span></h2></Link>
                    <div className="listText_price_box">
                      <div className="listText_tag_box">
                        <h2>Tow Nights</h2>
                      </div>
                      <div className="listText_tag_box listText_tagPrice_box">
                        <h2><FaRupeeSign/>40,000.00</h2>
                      </div>
                    </div>
                    <div className="listText_tag_box_articles">
                        <p>The Maldives consists of 1,190 coral...</p>
                    </div>
                  </div>
                  <div className="addTag_box">
                    <p>Best Seller</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="tourList_box">
                <div className="tourList_dtls_box">
                  <div className="listImg_box">
                    <Link><img src="./images/London.jpg" alt=""/></Link>
                  </div>
                  <div className="listText_box px-3">
                    <Link><h2>Maldives<span>(See beach beautiful site)</span></h2></Link>
                    <div className="listText_price_box">
                      <div className="listText_tag_box">
                        <h2>Tow Nights</h2>
                      </div>
                      <div className="listText_tag_box listText_tagPrice_box">
                        <h2><FaRupeeSign/>40,000.00</h2>
                      </div>
                    </div>
                    <div className="listText_tag_box_articles">
                        <p>The Maldives consists of 1,190 coral...</p>
                    </div>
                  </div>
                  <div className="addTag_box">
                    <p>Best Seller</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="tourList_box">
                <div className="tourList_dtls_box">
                  <div className="listImg_box">
                    <Link><img src="./images/Florida.jpg" alt=""/></Link>
                  </div>
                  <div className="listText_box px-3">
                    <Link><h2>Maldives<span>(See beach beautiful site)</span></h2></Link>
                    <div className="listText_price_box">
                      <div className="listText_tag_box">
                        <h2>Tow Nights</h2>
                      </div>
                      <div className="listText_tag_box listText_tagPrice_box">
                        <h2><FaRupeeSign/>40,000.00</h2>
                      </div>
                    </div>
                    <div className="listText_tag_box_articles">
                        <p>The Maldives consists of 1,190 coral...</p>
                    </div>
                  </div>
                  <div className="addTag_box">
                    <p>Best Seller</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="tourList_box">
                <div className="tourList_dtls_box">
                  <div className="listImg_box">
                    <Link><img src="./images/Dubai.jpg" alt=""/></Link>
                  </div>
                  <div className="listText_box px-3">
                    <Link><h2>Maldives<span>(See beach beautiful site)</span></h2></Link>
                    <div className="listText_price_box">
                      <div className="listText_tag_box">
                        <h2>Tow Nights</h2>
                      </div>
                      <div className="listText_tag_box listText_tagPrice_box">
                        <h2><FaRupeeSign/>40,000.00</h2>
                      </div>
                    </div>
                    <div className="listText_tag_box_articles">
                        <p>The Maldives consists of 1,190 coral...</p>
                    </div>
                  </div>
                  <div className="addTag_box">
                    <p>Best Seller</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="tourList_box">
                <div className="tourList_dtls_box">
                  <div className="listImg_box">
                    <Link><img src="./images/Paris.jpg" alt=""/></Link>
                  </div>
                  <div className="listText_box px-3">
                    <Link><h2>Maldives<span>(See beach beautiful site)</span></h2></Link>
                    <div className="listText_price_box">
                      <div className="listText_tag_box">
                        <h2>Tow Nights</h2>
                      </div>
                      <div className="listText_tag_box listText_tagPrice_box">
                        <h2><FaRupeeSign/>40,000.00</h2>
                      </div>
                    </div>
                    <div className="listText_tag_box_articles">
                        <p>The Maldives consists of 1,190 coral...</p>
                    </div>
                  </div>
                  <div className="addTag_box">
                    <p>Best Seller</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <AddPage/>
        <Container>
          <Cleintreview/>
        </Container>

        <Footer/>
        
    </div>
  )
}

export default Home