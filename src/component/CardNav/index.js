import {Link} from 'react-router-dom'
import { BsStar } from 'react-icons/bs';
import clsx from "clsx"
import styles from "./cardnav.module.css";

function CardNav(props) {
    let x = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.coins);
    // x = x.toLocaleString('vi-VN', {style : 'currency', currency : ''});
    let y = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.saleCoin);
    return <>
        <div className={clsx(styles.iteam, styles.iteam2 ,"col-6 col-lg-4 col-md-4  mt-3")}>
        <div className={clsx(styles.styleIteam)}>
              <Link to="">
                <div className={clsx(styles.saleImg)}>
                  {/* <p className={clsx(styles.saleImgIteam)}>Sale {props.sale}</p> */}
                  <img src={props.image} alt="anh san pham" />
                </div>
                <div className={clsx(styles.showIteamCoin)}>
                  <p className={clsx(styles.title)}>{props.title}</p>
                  <div className={clsx(styles.iteamCoin)}>
                    <p className={clsx(styles.coin)}>{x}</p>
                    <div className={clsx(styles.saleIteamCoin)}>
                      <p>{y}</p>
                    </div>
                  </div>
                  <div className={clsx(styles.noteIteam)}>
                    <p>{props.description}</p>
                  </div>
                </div>
              </Link>

              <div className={clsx(styles.moveCard)}>
              <button className={clsx(styles.btnAddToCard , styles.btnIteam)}>
                    <Link to={`/${props.id}`} >Mua Ngay</Link>
                </button>
                <button className={clsx(styles.btnEval ,styles.btnIteam)}>
                    <Link to={"#"} >Đánh Giá</Link>
                </button>
                <p className={clsx(styles.iconStar)}><BsStar/></p>
              </div>
            </div>
            
        </div>
    </>
}
export default CardNav