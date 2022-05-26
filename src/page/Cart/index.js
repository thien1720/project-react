import { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "./cart.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import {
  decrement,
  increament,
  removeFromCart,
} from "../../store/reducers/cart.slice";
import {
  cartTotalPriceSelector,
  cartTotalSelector,
} from "../../store/selector/selector";
import Footer from "../../component/Footer";
import Address from "../../component/FormAddress";


function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const totalPrice = useSelector(cartTotalPriceSelector);
  const totalSelecter = useSelector(cartTotalSelector);
  const dispatch = useDispatch();
  const [discount, setDiscount] = useState("");
  const [disTotal , setDisTotal] = useState(totalPrice);
  const [downTotal, setDownTotal] = useState(0);
  const [stylesNoDis, setStylesNoDis] = useState(true)

  let totalCoins = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(disTotal);

  let disCount = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(downTotal);

  function hanDiscount(e){
    setDiscount(e.target.value)
  }

  function handleChechDiscount(){
    if(discount === 'newtech'){ 
      setDisTotal(totalPrice - (totalPrice * 0.2))
      setDownTotal(totalPrice * 0.2)
      setStylesNoDis(false)
    }else{
      setDisTotal(totalPrice)
      setDownTotal(0)
      setStylesNoDis(true)


    }

  }


  return totalSelecter > 0 ? (
    <>
      <div id="show-iteam">
        <div className={clsx(styles.page)}>
          <Link to="/">Trang chủ</Link>/<Link to="/cart">Giỏ Hàng</Link>
          <p>Giỏ hàng có :</p>
        </div>

        <div className={clsx(styles.render)}>
          <div className={clsx(styles.subDetails)}>
            {cartItems.map((e) => {
              let x = new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(e.coins);

              let y = new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(e.saleCoin);

              let convetTotal;
              if (e.quantity > 0) {
                let totalIteam = e.coins * e.quantity;

                convetTotal = new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(totalIteam);
              } else {
                convetTotal = 0;
              } 
              

              return (
                <div className={clsx(styles.subDetail)} key={e.id}>
                  <div className={clsx(styles.detailImg, styles.detailStyle)}>
                    <img src={e.image} alt={e.title} />
                  </div>

                  <div className="detail-grid ">
                    <div
                      className={clsx(
                        styles.detailNameIteam,
                        styles.detailStyle
                      )}
                    >
                      <p>{e.title}</p>
                      <div className="showIteam-coin">
                        <div className="iteamCoin">
                          <p className={clsx(styles.Coins)}>{x}</p>
                          <div className={clsx(styles.saleCoin)}>
                            <p>{y}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={clsx(styles.detailStyle, styles.moreIteam)}>
                      <div className={clsx(styles.quantity)}>
                        <button className={clsx(styles.Btn)}>
                          <p
                            className={clsx(styles.increase)}
                            onClick={() => dispatch(increament(e.id))}
                          >
                            +
                          </p>
                        </button>
                        <span>{e.quantity}</span>

                        <button
                          className={clsx(styles.Btn)}
                          disabled={e.quantity === 1 ? "disabled" : ""}
                          onClick={() => dispatch(decrement(e.id))}
                        >
                          <i
                            className={clsx(styles.decrement)}
                          >
                            -
                          </i>
                        </button>
                      </div>

                      <div
                        className={clsx(styles.removeIteam)}
                        onClick={() => dispatch(removeFromCart(e))}
                      >
                        <i>
                          xóa sản phẩm
                          <FaRegTrashAlt />
                        </i>
                      </div>
                    </div>
                  </div>

                  <div className={clsx(styles.showCoin, styles.detailStyle)}>
                    <p>Tạm tính</p>
                    <p className="coin">{convetTotal}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div id="total">
        <div className="reverse">
          <div className={clsx(styles.saleIteam)}>
            <input
              value={discount}
              onChange={hanDiscount}
              type="text"
              placeholder="Nhập mã giảm giá"
              className={clsx()}
            />
            
            <button 
              className="discout-code"
              onClick={handleChechDiscount}
            >Áp dụng</button>
          </div>

          <div className="checked">
            <div className={clsx(styles.totalMonney)}>
              <p className="total-subtext"> Tổng tiền:</p>
              <p className="total-coin text-money">{totalCoins}</p>
            </div>
            <div className={clsx(styles.totalMonney)}>
              <p className="total-subtext"> Giá đã được giảm:</p>
              <p className="sale-money text-money">{disCount}</p>
            </div>
            <div className={clsx(styles.totalMonney)}>
              <p className="total-subtext">Cần phải thanh toán:</p>
              <p className="totalPay text-money">{totalCoins}</p>
            </div>

            {
              stylesNoDis ?
              <p className={clsx(styles.styleNoDis)}>{ discount != "" ?
                  "Không có mã giảm giá này":
                  undefined
              }</p> : 
              <p className={clsx(styles.styleNoDis)}>Đơn hàng của bạn được giảm giá 20%</p>
            }
          </div>
        </div>

      </div>

      <Address />

      <Footer />
    </>
  ) : (
    <>
      {/* <Header /> */}
      <p className={clsx(styles.titleZero)}>
        Giỏ hàng của bạn chưa có sản phẩm nào{" "}
      </p>

      <div className={clsx(styles.Shoping)}>
        <Link to="/">Mua hàng</Link>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
