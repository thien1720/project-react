import { BsFillLightningFill } from "react-icons/bs";
import Header from '../../component/Header/Header';
import Banner from '../../component/Baner'
import CardIteam from "../../component/Card"
import Filter from "./Filter"
import IteamNavs from "./PageNav"
import Text from "./Text"
import Footer from "../../component/Footer"
import styles from './Iteam.module.css';
import clsx from "clsx";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/virtual";
import "swiper/css/bundle";



function Phone(){
  
    return <>
        {/* <Header /> */}
        <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}

      >
        <SwiperSlide>
          <Banner image="image/slice/web-macbook-air-01.jpg" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Banner image="image/slice/web-realme-9-pro-01.jpg" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Banner image="image/slice/menu-slice.png" />{" "}
        </SwiperSlide>
      </Swiper>

        <section className={clsx(styles.Iteam)}>
            <div className={clsx(styles.pageHead)}>
                <h3>Tablet</h3>
            </div>

            <div className="container">
                <div className="row">
                    <Filter />
                    <IteamNavs />

                </div>

            </div>
        </section>


        <section>
            <Text></Text>
        </section>

        <div className={(styles.footer)}>
        <Footer />  

        </div>
    </>
}

export default Phone;