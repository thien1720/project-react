import { BsFillLightningFill } from "react-icons/bs";
import Header from '../../component/Header/Header';
import Banner from '../../component/Baner'
import CardIteam from "../../component/Card"
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
            loop={true}
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


        <div className="contai-center container">

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

                <SwiperSlide >

                    <CardFlash
                        image="/image/menuPhone/iphone_12_pro_max.webp"
                        coins={28510000}
                        title="iPhone 12 Pro Max 128GB I Chính hãng VN/A"
                        saleCoin={329900000}
                        description="Phần Mềm Diệt Virus, Office chính hãng chỉ từ 150k"
                        sale="20%"
                    />
                </SwiperSlide>

                <SwiperSlide >

                    <CardFlash
                        image="/image/menuPhone/samsung-galaxy-20.jpg"
                        coins={12490000}
                        title="Samsung Galaxy S20 FE 256GB (Fan Edition)"
                        saleCoin={15990000}
                        description="Phần Mềm Diệt Virus, Office chính hãng chỉ từ 150k"
                        sale="20%"

                    />
                </SwiperSlide>

                <SwiperSlide >

                    <CardFlash
                        image="/image/menuPhone/flip-3.webp"
                        coins={201900000}
                        title="Laptop Gaming Acer Nitro 5 AN515-45-R3SM NH.QBMSV.005"
                        saleCoin={24900000}
                        description="Tặng phiếu mua hàng trị giá :300.000đ"
                        sale="20%"

                    />
                </SwiperSlide>

                <SwiperSlide >

                    <CardFlash
                        image="/image/menuPhone/xiaomi11life.png"
                        coins={8150000}
                        title="Laptop HP 15S-FQ2558TU 46M26PA"
                        saleCoin={10190000}
                        description="Tặng phiếu mua hàng trị giá : 150.000đ<"
                        sale="18%"

                    />
                </SwiperSlide>

                <SwiperSlide >

                    <CardFlash
                        image="/image/menuPhone/samsung-a52.webp"
                        coins={9000000}
                        title="Samsung Galaxy A52s 5G"
                        saleCoin={10990000}
                        description="Tặng phiếu mua hàng trị giá : 150.000đ<"
                        sale="18%"

                    />
                </SwiperSlide>
            </Swiper>

        </div>

        <section className={clsx(styles.Iteam)}>
            <div className={clsx(styles.pageHead)}>
                <h3>Điện Thoại</h3>
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