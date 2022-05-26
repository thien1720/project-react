import { useState, useRef } from "react"
import clsx from "clsx"
import styles from './text.module.css'

import { FaChevronDown } from "react-icons/fa"

function Text() {

    const [showText, setShowText] = useState(false)
    const [buttonShow, setbutonShow] = useState(false)

    const handleShowText = () => {
        setShowText(true)
        setbutonShow(true)
    }
    return <>
        <h3 className={clsx(styles.TextHead)}>Bài viết công nghệ</h3>

        <div 
            className={clsx(styles.ContentText , showText ? styles.ContentTextShow : undefined )}   
        >
            
            <div className={clsx(styles.showText , buttonShow ?styles.showText2 :undefined )}>
                <button 
                    className={clsx(styles.showHeight)}
                    onClick={handleShowText}
                >Xem thêm
                    <FaChevronDown />
                </button>

            </div>

            <div className={clsx(styles.FirstText ,styles.iteamText)}>
                <h5>Máy tính bảng – Sự phát triển vượt bậc của ngành công nghệ

                </h5>
                <p>Máy tính bảng, còn được gọi là tablet, chỉ các thiết bị di động chạy hệ điều hành có kích thước màn hình lớn, từ 7 inch trở lên, thao tác cảm ứng để nhập liệu, có thể kết hợp thêm bàn phím và chuột.
                    Trong hàng chục năm kể từ 1960, máy tính bảng đã được nghiên cứu và phát triển, đến đầu những năm 2000, Microsoft đã cho ra mắt các flagship đầu tiên nhưng không thành công mấy. Đầu năm 2010, 
                    Apple rò rỉ hình ảnh của một thiết bị chạy hệ điều hành giống iPhone nhưng có kích thước to đến 9.7 inch, đặt tên cho nó là iPad. Thiết bị được cho là lai giữa điện thoại di động và máy tính xách tay,
                    vì sự phát triển của iPhone, iPod trong nhiều năm trước nên người ta biết đến iPad nhiều hơn. Đến đây người ta mới biết đến máy tính bảng.

                </p>
                <p>
                    Sau thời điểm này, một loạt các máy tính bảng được ra đời, thành công nhất là Apple khi chiếm lĩnh gần hết thị trường với iPad qua các năm. 
                    Phablet là thiết bị lai giữa điện thoại và máy tính bảng, tính di động cao hơn, mức giá rẻ hơn, vì thế mà các nhà sản xuất cũng phải tung ra các sản phẩm máy tính bảng để cạnh tranh.
                </p>
            </div>

            <div className={clsx(styles.contentImg)}>
                <img src="/image/wrrting/weiting-tablet.jpg" alt="ảnh sản phẩm" />
            </div>
            <div className={clsx(styles.FirstText ,styles.iteamText)}>
            <h6>Tại sao nên mua máy tính bảng?
                </h6>
                <p> Hiện tại, CellphoneS đang là nơi cung cấp máy tính bảng iPad, Samsung, Huawei... chính hãng với mức giá tốt trên thị trường. <br/>
                    Nếu bạn muốn một màn hình to, hỗ trợ cho công việc nhiều hơn, việc giải trí cũng thỏa mãn hơn khi trải nghiệm các tựa game nổi tiếng như Asphalt, Vanglory, Street Fighter, Mortal Combat … và xem phim với kích thước màn hình lớn hơn. <br/>
                    Nhẹ hơn, mỏng hơn laptop, mang theo dễ dàng hơn. <br/>
                    Giá tốt khi bạn đang cân nhắc giữa mua một chiếc máy tính bảng thay cho một laptop và một điện thoại chỉ hỗ trợ cho công việc cơ bản. Xu hướng máy tính bảng cũng đang hướng đến phân khúc rẻ hơn, đặc biệt là Samsung. <br/>
                    Công việc chuyên nghiệp, liên quan đến hình ảnh hay đồ họa thì iPad Pro sẽ là lựa chọn hợp lý vì được Apple cải cách cấu hình, chip ram xử lý và màn hình to hơn hẳn các dòng trước. <br/>

                </p>

                <h6>Các tiêu chí để chọn chiếc tablet phù hợp</h6>
                <p>
                    Để chọn mua một sản phẩm tablet phù hợp nhất, người dùng cần cân nhắc một số yếu tố sau.
                </p>

                <h6>Kích thước màn hình</h6>
                <p>Tuy đều thuộc dòng tablet nhưng không phải mẫu nào cũng có kích thước như nhau, chủ yếu chia thành 4 kích thước màn hình chính. Trước khi đưa ra quyết định cuối cùng, người dùng cần cân nhắc đến nhu cầu sử dụng để có những lựa chọn phù hợp.
                    <br/>
                    -Tablet Mini từ 7 inch đến 7.7 inch <br/>
                    -Tablet 7.9 inch đến 9 inch <br/>
                    -Tablet kích thước 9.7 inch đến 10.1 inch <br/>
                    -Tablet kích thước từ 11 inch đến 13 inch <br/>
                </p>

                <h6>
                    Thiết kế
                </h6>
                <p>
                    Các dòng máy tính bảng sở hữu thiết kế sang trọng với khung viền vuông vức cùng nhiều màu sắc lựa chọn. Chất liệu có thể được hoàn thiện từ nhôm hoặc nhựa cao cấp tùy thuộc từng phân khúc tương ứng với mức giá mà nhà sản xuất muốn tập trung để tối ưu hóa chi phí.
                </p>

                <h6>Cấu hình</h6>
                <p>Cấu hình là một trong những tiêu chí quan trọng trước khi chọn mua một chiếc máy tính bảng mới. Trong đó, hai yếu tố chính cần quan tâm là RAM và vi xử lý. Trong đó dung lượng RAM càng lớn giúp thiết bị hoạt động càng mượt mà. <br/>
                    Tuy nhiên, cầm xác định rõ nhu cầu sử dụng để chọn mua một sản phẩm phù hợp nhất, tránh lãng phí khi mua sản phẩm quá cao mà không sử dụng hết công năng.
                </p>

                <h6>Dung lượng pin</h6>
                <p>Thời gian sử dụng là một trong những yếu tố cần quan tâm khi chọn mua máy tính bảng mới. Do đó để có một thiết bị với thời gian sử dụng lâu người dùng cần cân nhắc đến dung lượng pin cũng như công nghệ sạc nhanh của thiết bị.</p>

                <h6>Giá thành</h6>
                <p>Tương tự các thiết bị điện tử khác, tablet cũng chia sản phẩm thành các phân khúc như giá rẻ, tầm trung và cao cấp.</p>

                <h6></h6>
                <p></p>

                <h6></h6>

            </div>
            
        </div>
    </>
}

export default Text