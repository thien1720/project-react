import { BsFillLightningFill } from "react-icons/bs";

import Banner from '../../component/Baner'
import CardFlash from "../../component/FlashSale";

import Filter from "../../component/Filter"
import IteamNavs from "../../component/PageNav"
import Text from "../../component/Text"
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

function LapTop() {

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
      <div className="row">
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
              image="/image/Sale-laptop/macbook-air-gold.jpg"
              coins={311900000}
              title="Apple MacBook Air M1 512GB I Chính hãng Apple Việt Nam "
              saleCoin={349900000}
              description="Thu cũ lên đời giá cao - Trợ giá lên tới 1.000.000đ"
              sale="20%"
            />
          </SwiperSlide>

          <SwiperSlide>

            <CardFlash
              image="/image/Sale-laptop/Dell_0003_34994.jpg"
              coins={16590000}
              title="Laptop Dell Vostro 3405 V4R53500U003W"
              saleCoin={18490000}
              description="Phần Mềm Diệt Virus, Office chính hãng chỉ từ 150k"
              sale="16%"

            />
          </SwiperSlide>

          <SwiperSlide>

            <CardFlash
              image="/image/Sale-laptop/acer-nitro-5.jpg"
              coins={21900000}
              title="Laptop Gaming Acer Nitro 5 AN515-45-R3SM NH.QBMSV.005"
              saleCoin={23900000}
              description="Tặng phiếu mua hàng trị giá :300.000đ"
              sale="20%"

            />
          </SwiperSlide>

          <SwiperSlide>

            <CardFlash
              image="/image/Sale-laptop/laptop-hp-15s.webp"
              coins={18050000}
              title="Laptop HP 15S-FQ2558TU 46M26PA"
              saleCoin={21100000}
              description="Tặng phiếu mua hàng trị giá : 150.000đ<"
              sale="18%"

            />
          </SwiperSlide>

          <SwiperSlide>

            <CardFlash
              image="/image/Lap/RogStrig.jpg"
              coins={21990000}
              title="Laptop Asus Gaming Rog Strix G15 G513IH"
              saleCoin={23900000}
              description="Tặng phiếu mua hàng trị giá : 150.000đ"
              sale="12%"

            />
          </SwiperSlide>
        </Swiper>


      </div>
    </div>

    <section className={clsx(styles.Iteam)}>
      <div className={clsx(styles.pageHead)}>
        <h3>Laptop</h3>
      </div>

      <div className={clsx(styles.contai , "container")}>
        <div className="row">
          <Filter />
          <IteamNavs />

        </div>

      </div>
    </section>


    <section>
      <Text />
    </section>

    <div className={(styles.footer)}>
      <Footer />

    </div>
  </>
}

export default LapTop;