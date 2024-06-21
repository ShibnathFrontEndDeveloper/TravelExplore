import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation,Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Cleintreview.css'

function Cleintreview() {
  return (
    <div>

        <Swiper className='cleint_swiper' modules={[Navigation, Pagination, Autoplay ]}
            spaceBetween={0}
            slidesPerView={5}
            loop
            // autoplay
            navigation

            breakpoints={{0:
                {slidesPerView:2,
                spaceBetween:10,
                },
                768:{slidesPerView:5,
                    spaceBetween:10,},

                1024:{
                    slidesPerView:2,
                    spaceBetween:10,
                }
            }}
        
        >
            <SwiperSlide className='cleint_swiperSlide'>
                <div className="client_slider">
                    <div className="dtls_box">
                        <h2>Usha Halder</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam suscipit dolorem odio illo deleniti beatae id accusantium a neque saepe!</p>
                        <span>Delhi, 1000458</span>
                    </div>
                    <img src="../images/Florida.jpg" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className='cleint_swiperSlide'>
                <div className="client_slider">
                    <div className="dtls_box">
                        <h2>Usha Halder</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam suscipit dolorem odio illo deleniti beatae id accusantium a neque saepe!</p>
                        <span>Delhi, 1000458</span>
                    </div>
                    <img src="../images/Florida.jpg" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className='cleint_swiperSlide'>
                <div className="client_slider">
                    <div className="dtls_box">
                        <h2>Usha Halder</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam suscipit dolorem odio illo deleniti beatae id accusantium a neque saepe!</p>
                        <span>Delhi, 1000458</span>
                    </div>
                    <img src="../images/Florida.jpg" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className='cleint_swiperSlide'>
                <div className="client_slider">
                    <div className="dtls_box">
                        <h2>Usha Halder</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam suscipit dolorem odio illo deleniti beatae id accusantium a neque saepe!</p>
                        <span>Delhi, 1000458</span>
                    </div>
                    <img src="../images/Florida.jpg" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className='cleint_swiperSlide'>
                <div className="client_slider">
                    <div className="dtls_box">
                        <h2>Usha Halder</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam suscipit dolorem odio illo deleniti beatae id accusantium a neque saepe!</p>
                        <span>Delhi, 1000458</span>
                    </div>
                    <img src="../images/Florida.jpg" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className='cleint_swiperSlide'>
                <div className="client_slider">
                    <div className="dtls_box">
                        <h2>Usha Halder</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam suscipit dolorem odio illo deleniti beatae id accusantium a neque saepe!</p>
                        <span>Delhi, 1000458</span>
                    </div>
                    <img src="../images/Florida.jpg" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className='cleint_swiperSlide'>
                <div className="client_slider">
                    <div className="dtls_box">
                        <h2>Usha Halder</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam suscipit dolorem odio illo deleniti beatae id accusantium a neque saepe!</p>
                        <span>Delhi, 1000458</span>
                    </div>
                    <img src="../images/Florida.jpg" alt="" />
                </div>
            </SwiperSlide>
            
        </Swiper>
    </div>
  )
}

export default Cleintreview