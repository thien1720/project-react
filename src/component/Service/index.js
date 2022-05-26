import clsx from "clsx"
import { useState , useRef } from "react";
import { AiOutlineCustomerService, AiOutlineSync } from "react-icons/ai";
import { FaLuggageCart } from "react-icons/fa";
import { BsPatchCheck, BsCursor } from "react-icons/bs";
import styles from "./service.module.css"
// import { Shiping, Holine, Changes } from "./iconservice"

function Service() {
    const [inputEmail, setInputEmail] = useState("")
    const emailSub = useRef()

    const clearEmail = () => {
        setInputEmail("")
        emailSub.current.focus()
    }

    return <>
        <div className={clsx(styles.styleService)}>

            <div className={clsx(styles.content)}>
                <div className={clsx(styles.iteamService)}>

                    <AiOutlineCustomerService className={clsx(styles.iconService)} />
                    <div className={clsx(styles.subService)}>
                        <p>Holine</p>
                        <h6>1900.2922</h6>
                    </div>
                </div>

                <div className={clsx(styles.iteamService)}>
                    <AiOutlineSync className={clsx(styles.iconService)} />
                    <div className={clsx(styles.subService)}>
                        <p>Thủ tục đổi trả</p>
                        <h6>Dễ Dàng</h6>
                    </div>
                </div>

                <div className={clsx(styles.iteamService)}>
                    <FaLuggageCart className={clsx(styles.iconService)} />
                    <div className={clsx(styles.subService)}>
                        <p>Miễn phí vận chuyển</p>
                        <h6>Toàn Quốc</h6>
                    </div>
                </div>

                <div className={clsx(styles.iteamService)}>
                    <BsPatchCheck className={clsx(styles.iconService)} />
                    <div className={clsx(styles.subService)}>
                        <p>Sản phẩm</p>
                        <h6>Chính Hãng</h6>
                    </div>
                </div>
            </div>


        </div>

        <div className={clsx(styles.subEmail)}>
            <div className={clsx(styles.headSub)}>
                <h6>Đăng ký nhận tin</h6>
                <p>Đăng ký để nhận những chương trình khuyến mại hot nhất của NewTech

                </p>
            </div>
            <div className={clsx(styles.iteamEmail)}>
                <div>
                    <input
                        value={inputEmail}
                        onChange={(e) => setInputEmail(e.target.value)}
                        type="text"
                        placeholder="Nhập Email"
                        className={clsx(styles.inputEmail)}
                        ref={emailSub}
                    />
                </div>
                <div 
                    className={clsx(styles.btnSub)}
                    onClick={clearEmail}
                   
                >
                    <BsCursor className={clsx(styles.checkSub)} />
                </div>
            </div>
        </div>
    </>
}

export default Service