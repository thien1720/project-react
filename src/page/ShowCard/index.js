import { Link } from "react-router-dom";
// import { useDispatch } from 'react-redux'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Tabs, Tab } from 'react-bootstrap'
import clsx from "clsx";
import { FaRegCheckCircle } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import Option from "../../component/Option";
import Footer from "../../component/Footer";
import Paramenter from "../../component/Show/Paramenter";
import Configuater from "../../component/Show/Configurater";
import CardFlash from "../../component/FlashSale";
import SlideImg from "../../component/SlideShowImg"
import { addToCart } from "../../store/reducers/cart.slice"
import styles from "./show.module.css";
import Comment from "../../component/FormComment";
import HideCommmet from "../../component/HideComment"

function ShowCard() {
  const dispatch = useDispatch()
  const [product, setProduct] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);
  let params = useParams();


  useEffect(() => {
    fetch(`https://webreacts.herokuapp.com/products/${params.id}`)
      .then(res => res.json())
      .then(json => {
        setProduct(json)
        setLoading(false)
      })
      .catch(error => {
        setError(error)
        setLoading(false)
      })
  }, [params])

  if (loading) {
    return (
      <p>Loading...</p>
    )
  }
  if (error) {
    return (
      <p>Có lỗi xảy ra !</p>
    )
  }

  const Loading = () => {
    return <p>loading</p>
  }

  let x = new Intl.NumberFormat('vi-VN',
    {
      style: 'currency', currency: 'VND'
    }).format(product.coins);

  let y = new Intl.NumberFormat('vi-VN',
    {
      style: 'currency', currency
        : 'VND'
    }).format(product.saleCoin);



  // console.log(product.listImg)
  return (
    <>
      <div className={clsx(styles.subText)}>
        <h3>
          <Link to="/">Trang chủ</Link>/
          <Link to="/lap">Laptop</Link>/
          <Link to="#">Macbook</Link>
        </h3>
      </div>
      <div className="container">
        <div className="row">
          <div className="content-grid col-md-4 col-sm-12 col-12 mt-3">
            <div className="content-styleIteam">
              <div className="prent-img">

                <div className={clsx(styles.prentImg)}>
                  <SlideImg images={product.listImg} keys={product.title} />
                </div>
              </div>


            </div>
          </div>

          <div className="content-grid col-md-4 col-sm-12 col-12 mt-3">
            <div className="content-styleIteam">
              <b>{product.title}</b>
              <div className={clsx(styles.iteamCoin)}>
                <p className={clsx(styles.coin)}>{x}</p>
                <div className={clsx(styles.saleIteamCoin)}>
                  <p>{y}</p>
                </div>
              </div>
              <div className="content-option">
                <b>Phiên bản lựa chọn:</b>

                <div className="row">

                  <Option options={product.option} />

                </div>


                <div className="option-color">
                  <b>Màu Sắc:</b>

                  <div className={clsx(styles.optionColor2)}>
                    <div
                      className={clsx(styles.styleColor, styles.colorIteam1)}
                    ></div>
                    <div
                      className={clsx(styles.styleColor, styles.colorIteam2)}
                    ></div>
                    <div
                      className={clsx(styles.styleColor, styles.colorIteam3)}
                    ></div>
                  </div>
                </div>

                <div className={clsx(styles.contenText)}>
                  <b>Khuyến mại:</b>
                  <p>
                    <FaRegCheckCircle className={clsx(styles.check)} />
                    Phầm mềm diệt Viruss từ hãng trị giá 150.000k.
                  </p>
                  <p>
                    <FaRegCheckCircle className={clsx(styles.check)} />
                    Thanh toán qua VNPAY - Giảm 100.000đ cho đơn hàng từ
                    4.000.000đ trở lên, Giảm 150.000đ cho đơn hàng từ
                    15.000.000đ trở lên .
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="content-grid col-md-4 col-sm-12 col-12 mt-3">
            <div className={clsx(styles.contenText)}>
              <div className={clsx(styles.listTotal)}>
                <div className={clsx(styles.subTotal)}>
                  <Link
                    to="/cart"
                    onClick={() => dispatch(addToCart(product))}>
                    <h6 >Mua ngay</h6>
                    <p>(giao hàng tận nơi hoặc lấy tại cửa hàng)</p>
                  </Link>
                </div>
                <div className={clsx(styles.subNav)}>
                  <a href="#">
                    <h6>Mua trả qua thẻ</h6>
                    <p>(thanh toán qua thẻ hoặc ví)</p>
                  </a>
                  <a href="#">
                    <h6>Mua trả góp</h6>
                    <p>(xét duyệt qua điện thoại)</p>
                  </a>
                </div>
              </div>
              <b>Thông tin máy:</b>
              <p>
                <FaRegCheckCircle className={clsx(styles.check)} />
                Máy mới 100%, đầy đủ phụ kiện từ nhà sản xuất. Sản phẩm có mã
                SA/A (được Apple Việt Nam phân phối chính thức).
              </p>
              <p>
                <FaRegCheckCircle className={clsx(styles.check)} />
                Máy, Sách HDSD, Cáp sạc USB-C (2 m), Cốc sạc USB-C 30W.
              </p>
              <p>
                <FaRegCheckCircle className={clsx(styles.check)} />
                Bảo hành 12 tháng tại trung tâm bảo hành chính hãng Apple Việt
                Nam. 1 Đổi 1 trong 30 ngày nếu có lỗi phần cứng nhà sản xuất.
                Gia hạn bảo hành thời gian giãn cách
              </p>
              <p>
                <img src="/image/icon-phone.png" alt="" />
                Hotline:013355485.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="description">
        <div className="description-nav">
          <div className={clsx(styles.tabListShow)}>

            <Tabs defaultActiveKey="Đặc điểm nổi bật"
              id="uncontrolled-tab-example"
              className={clsx(styles.styleNavTab, "mb-3")}>
              <Tab
                className={clsx(styles.navLink)}
                eventKey="Đặc điểm nổi bật"
                title="Đặc điểm nổi bật">
                <Configuater />
              </Tab>
              <Tab
                className={clsx(styles.navLink)}
                eventKey="Thông số cấu hình"
                title="Thông số cấu hình">
                <Paramenter />
              </Tab>

            </Tabs>

          </div>

        </div>
      </div>

      <div id="ieam-alike">
        <div className={clsx(styles.desscriptionNav)}>
          <h3>Sản phẩm tương tự</h3>
        </div>

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
              image="/image/Lap/laptop-lenovo-ideapad-3.png"
              title="Laptop Lenovo Ideapad 3- Chính hãng"
              coins={14400000}
              saleCoin={15900000}
              description="Phần Mềm Diệt Virus, Office chính hãng chỉ từ 150k"
            />
            </SwiperSlide>
            <SwiperSlide>
            <CardFlash
              image="/image/Lap/vivobook.png"
              title="Laptop ASUS Vivobook  - Nhập khẩu chính hãng"
              coins={19990000}
              saleCoin={21210000}
              description="Phần Mềm Diệt Virus, Office chính hãng chỉ từ 150k"
            />
            </SwiperSlide>
            <SwiperSlide>
            <CardFlash
              image="/image/Lap/Macbook Pro 13.png"
              title="Apple M1 - MacBook Pro 13''2020 - Chính hãng Apple Việt Nam"
              coins={360000000}
              saleCoin={38000000}
              description="Thu cũ đổi mới trọn đời"
            />
            </SwiperSlide>
            <SwiperSlide>
            <CardFlash
              image="/image/Lap/asusZenbook.jpg"
              title="Laptop ASUS ZenBook UX325EA-KG363T"
              coins={23200000}
              saleCoin={25290000}
              description="Phần Mềm Diệt Virus, Office chính hãng chỉ từ 150k"
            />
            </SwiperSlide>
            <SwiperSlide>
            <CardFlash
              image="/image/Lap/RogStrig.jpg"
              coins={21990000}
              title="Laptop Asus Gaming Rog Strix G15 G513IH"
              saleCoin={23900000}
              description="Tặng phiếu mua hàng trị giá : 150.000đ"
            />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className={clsx(styles.formInput)}>
        <div className={clsx(styles.listShow)}>
          <h3>Hỏi đáp và đánh giá sản phẩm</h3>
        </div>
          <Comment />
      </div>

      <Footer></Footer>
    </>
  )
}

export default ShowCard;
