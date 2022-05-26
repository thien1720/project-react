import { useState } from "react"
import clsx from "clsx"
import { FaChevronDown } from "react-icons/fa"

import styles from './configuater.module.css'

function Configuater() {
    const [showText, setShowText] = useState(false)
    const [buttonShow, setbutonShow] = useState(false)

    const handleShowText = () => {
        setShowText(true)
        setbutonShow(true)
    }
    return <>
        <div className={clsx(styles.contentText, showText ? styles.ContentTextShow : undefined )}>
            <div className={clsx(styles.showText, buttonShow ? styles.showText2 : undefined)}>
                <button
                    className={clsx(styles.showHeight)}
                    onClick={handleShowText}
                >Xem thêm
                    <FaChevronDown />
                </button>

            </div>

            <div className={clsx(styles.firtText)}>

                <p>
                    Hiệu năng vượt trội - Cân mọi tác vụ từ word, exel đến chỉnh sửa ảnh trên các phần mềm như AI, -PTS <br />

                    Đa nhiệm mượt mà - Ram 8GB cho phép vừa mở trình duyệt để tra cứu thông tin, vừa làm việc trên phần mềm <br />

                    Trang bị SSD 256GB - Cho thời gian khởi động nhanh chóng, tối ưu hoá thời gian load ứng dụng <br />

                    Chất lượng hình ảnh sắc nét - Màn hình Retina cao cấp cùng công nghệ TrueTone cân bằng màu sắc <br />

                    Thiết kế sang trọng - Nặng chỉ 1.29KG, độ dày 16.1mm. Tiện lợi mang theo mọi nơi <br />
                </p>

            </div>d

            <div className={clsx(styles.contentImg)}>

            </div>
            <div className={clsx(styles.firtText, styles.botomHead)} >
                <h6>Macbook Air M1 2020 - Sang trọng, tinh tế, hiệu năng khủng
                </h6>
                <p>Là dòng sản phẩm có thiết kế mỏng nhẹ, sang trọng và tinh tế cùng với đó là giá thành phải chăng nên MacBook Air đã thu hút được đông đảo đảo người dùng yêu thích và lựa chọn. Một trong những phiên bản mới nhất mà khách hàng không thể bỏ qua khi đến với NEWTECH đó là MacBook Air M1.

                </p>
                <p>
                    MacBook Air M1 256GB 2020 được trang bị màn hình Retina IPS 13.3 inch mang đến nhiều màu sắc hơn lên đến 48% so với những thế hệ trước đó. Bên cạnh đó, màn hình tráng gương tràn viền khiến viền giúp mỏng hơn 50% so với trước đây
                </p>
                <p>
                    Điểm nhấn của MacBook Air M1 256GB 2020 chính là con chip M1. CPU của chip M1 sẽ có 8 nhân, bao gồm 4 nhân hiệu suất cao và 4 nhân hiệu suất thấp mang đến sức mạnh vượt trội cho thiết bị rất. Sức mạnh trên M1 256GB hơn 98% so với các laptop Windows và hiệu năng vượt trội hơn so với các phiên bản Air sử dụng chip Intel.
                </p>
                <p>
                    Nếu bạn muốn sở mua MacBook Air 2020 M1 thì hãy nhanh tay liên hệ đến Hotline: 013355485 hay đến trực tiếp cửa hàng thuộc hệ thống NewTech để tiến hành đặt hàng với mức giá cạnh tranh nhất
                </p>

            </div>
        </div>

    </>
}
export default Configuater