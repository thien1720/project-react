import { BsFillLightningFill } from "react-icons/bs";

import Banner from '../../component/Baner'

import CardFlash from "../../component/FlashSale";

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


function Phone() {

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
        <Banner image="/image/slice/web-macbook-air-01.jpg" />{" "}
      </SwiperSlide>
      <SwiperSlide>
        <Banner image="/image/slice/web-realme-9-pro-01.jpg" />{" "}
      </SwiperSlide>
      <SwiperSlide>
        <Banner image="/image/slice/menu-slice.png" />{" "}
      </SwiperSlide>
    </Swiper>
    <h1 className={clsx(styles.flashSale)}>Flash Sale <BsFillLightningFill /></h1>

    {/* flash sale */}
    <div className="container">
      <Swiper
        // loop={false}
        slidesPerView={4}
        spaceBetween={4}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}

      >
        <SwiperSlide>

          <CardFlash
            image="/image/Acccers/airpods-2.jpg"
            coins={3190000}
            title="Tai nghe Bluetooth Apple AirPods 2 VN/A"
            saleCoin={3990000}
            description="B???o h??nh 6 th??ng ch??nh h??ng"
            sale="11%"
          />
        </SwiperSlide>

        <SwiperSlide>

          <CardFlash
            image="/image/Acccers/sac-nhanhAnker.jpg"
            coins={2900000}
            title="S???c nhanh Anker Powerport III Nano 20W A2633"
            saleCoin={490000}
            description="B???o h??nh 6 th??ng ch??nh h??ng"
            sale="8%"

          />
        </SwiperSlide>

        <SwiperSlide>

          <CardFlash
            image="/image/Acccers/camera-ip-wifi.jpg"
            coins={530000}
            title="Camera IP Wifi TP-Link Tapo C200 360?? 1080P 2MP"
            saleCoin={1290000}
            description="T???ng phi???u mua h??ng tr??? gi?? :300.000??"
            sale="51%"

          />
        </SwiperSlide>

        <SwiperSlide>

          <CardFlash
            image="/image/Acccers/router-wifi-tp-link-archer-ax10.jpg"
            coins={1200000}
            title="Router Wifi Tp-Link Archer Ax10 chu???n Wifi 6 AX1500"
            saleCoin={3790000}
            description="T???ng phi???u mua h??ng tr??? gi?? : 150.000??<"
            sale="71%"

          />
        </SwiperSlide>

        <SwiperSlide>

          <CardFlash
            image="/image/Acccers/gia-treo.jpg"
            coins={420000}
            title="Gi?? treo m??n h??nh m??y t??nh North Bayou NB-F80"
            saleCoin={650000}
            description="T???ng phi???u mua h??ng tr??? gi?? : 150.000??"
            sale="42%"

          />
        </SwiperSlide>
      </Swiper>




    </div>

    <section className={clsx(styles.Iteam)}>
      <div className={clsx(styles.pageHead)}>
        <h3>Ph??? Ki???n</h3>
      </div>

      <div className={clsx(styles.contai , "container")}>
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