import { useState } from "react"

import clsx from 'clsx'
import {FaChevronDown} from "react-icons/fa"
import styles from "./paramenter.module.css"

function Paramenter(){

    const [showText, setShowText] = useState(false)
    const [buttonShow, setbutonShow] = useState(false)

    const handleShowText = () => {
        setShowText(true)
        setbutonShow(true)
    }
    return <>
        

        <div className={clsx(styles.contentText ,showText ? styles.ContentTextShow : undefined )}>
        <div className={clsx(styles.showText , buttonShow ?styles.showText2 :undefined )}>
                <button 
                    className={clsx(styles.showHeight)}
                    onClick={handleShowText}
                >Xem thêm
                    <FaChevronDown />
                </button>

            </div>

            <div className={clsx(styles.listConfig)}>
                <ul>
                    <li className={clsx(styles.configColor)}>
                        <p className={clsx(styles.configNavSize)}>Màn hình:</p>
                        <p>13.3"Retina (2560 x 1600)</p>
                    </li>
                    <li>
                        <p className={clsx(styles.configNavSize)}>Ram:</p>
                        <p>8 GB</p>
                    </li>

                    <li className={clsx(styles.configColor)}>
                        <p className={clsx(styles.configNavSize)}>Ổ cứng:</p>
                        <p>256 GB SSD</p>
                    </li>
                    <li >
                        <p className={clsx(styles.configNavSize)}>Hệ điều hành:</p>
                        <p>Mac OS</p>
                    </li>

                    <li className={clsx(styles.configColor)}>
                        <p className={clsx(styles.configNavSize)}>Pin:</p>
                        <p>Khoảng 10 tiếng</p>
                    </li>
                    <li >
                        <p className={clsx(styles.configNavSize)}>Trọng lượng:</p>
                        <p>1.29 kg</p>
                    </li>
                    
                    <li className={clsx(styles.configColor)}>
                        <p className={clsx(styles.configNavSize)}>Độ phân giải</p>
                        <p>Retina</p>
                    </li>
                    <li >
                        <p className={clsx(styles.configNavSize)}>Bluetooth:</p>
                        <p>	v5.0</p>
                    </li>

                    <li className={clsx(styles.configColor)}>
                        <p className={clsx(styles.configNavSize)}>Công nghệ âm thanh:</p>
                        <p>	6 Loa</p>
                    </li>
                    <li >
                        <p className={clsx(styles.configNavSize)}>Tính năng đặc biệt:</p>
                        <p> Bảo mật vân tay, Nhận diện khuôn mặt</p>
                    </li>

                </ul>
            </div>
        </div>

        
    </>
}

export default Paramenter