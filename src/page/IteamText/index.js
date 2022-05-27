
import ShowText from "../../component/ShowText";

import Footer from "../../component/Footer"
import styles from './Iteam.module.css';
import clsx from "clsx";

function CardText() {

    return <>
        {/* <Header /> */}

        <div id="content">
            <div className=" container mt-4">
                <div className="grid-iteam row">
                    <div className="col-md-8 col-12">
                        <h3 className={clsx(styles.headerTitle)} >Tin Tức Công Nghệ</h3>

                        <ShowText
                            
                            image="/image/wrrting/realme-v21.jpg"
                            title="Chi tiết Realme V21: Chip 8 nhân. Camera kép. Màn hình HD+"
                            description="Realme mới đây đã chứng nhận một chiếc điện thoại mới trên TENAA với hai số kiểu máy - RMX3575 và RMX3576. Động thái..."
                        />

                        <ShowText
                            
                            image="/image/wrrting/iphone-se-3.jpg"
                            title="iPhone SE 2022 đúng chuẩn “bình cũ rượu mới”: thiết kế không đổi, chip..."
                            description="iPhone SE 2022, chiếc iPhone được các iFan mong đợi bấy lâu đã chính thức trình làng trong sự kiện ngày 8/3 của Apple.... "
                        />

                        <ShowText
                            
                            image="/image/wrrting/ipad-air-m1.png"
                            title="iPad Air M1 chính thức ra mắt: chip M1 đẳng cấp, thêm tùy chọn..."
                            description="Apple đã chính thức trình làng iPad Air thế hệ mới hay còn gọi là iPad Air 5 (iPad Air M1). Cùng Hoàng Hà..."
                        />

                        <ShowText
                            
                            image="/image/wrrting/M1-Ultra.jpg"
                            title="Chip M1 Ultra vượt trội hơn Intel Mac Pro 28-Core trong điểm chuẩn trên..."
                            description="Điểm chuẩn đầu tiên của chip M1 Ultra của Apple xuất hiện trên Geekbench sau sự kiện đêm qua ngày 8/3 ngầm xác nhận..."
                        />

                        <ShowText
                            
                            image="/image/wrrting/iphone-13-xanhla.png"
                            title="Toàn cảnh sự kiện ngày 8/3 của Apple: iPhone 13 xanh lá, iPhone SE..."
                            description="Sự kiện Peek Performance đã chính thức diễn ra vào lúc 10h sáng ngày 8/3 (theo giờ Mỹ), tức 1h ngày 9/3 (theo giờ..."
                        />


                    </div>

                    <div className={clsx(styles.prevent, "col-md-4 col-12")}>
                        <h5>Bài Viết Đáng Chú ý</h5>

                        <ShowText
                            head 
                            sizeImg
                            image="/image/wrrting/height-line-1.jpg"
                            title="Test độ bền Galaxy Z Fold 2 cực căng: Bẻ không..."
                        />
                        <ShowText
                            head 
                            sizeImg
                            image="/image/wrrting/height-line-3.jpg"
                            title="4 điều đã giúp cho HTC U12+ “nở mày nở mặt”..."
                        />
                        <ShowText
                            head 
                            sizeImg
                            image="/image/wrrting/height-line-4.jpg"
                            title="ĐỐ VUI: Bạn có biết nhà sản xuất điện thoại nào..."
                        />
                        <ShowText
                            head 
                            sizeImg
                            image="/image/wrrting/heiline-iteam1.jpg"
                            title="Nên mua Galaxy Watch Active màu nào cho chất?"
                        />
                    </div>
                </div>


            </div>
        </div>



        <div className={(styles.footer)}>
            <Footer />

        </div>
    </>
}

export default CardText;