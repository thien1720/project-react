import clsx from "clsx";
import { FaFacebookSquare,FaInstagram,FaRegEnvelope ,FaYoutube } from "react-icons/fa";
import "./footer.css"
import styles from './footer.module.css'

function Footer(){
    return < >
        <div id="footer" >
        <div className="footer-show">
            <div className="show-company">
                <img src="./image/LogoBrand.png" alt="" />
                <div className="company-text">
                <h5>Công ty cổ phần NewTech</h5>
                <h6>Hệ thống:</h6>
                <p>
                    <img src="image/mapLine.png" alt="" />
                    30 Thái Hà -HN
                </p>
                <p>
                    <img src="image/mapLine.png" alt="" />
                    102 Hoàng Hoa Thám-HCM
                </p>
                <p>Hotline: 013355485</p>
                </div>
            </div>

            <div className="show-service">
                <ul>
                <p>Tổng đài hỗ trợ:(Miễn phí)</p>
                <li>Gọi mua: 1800.1060 (7:30 - 22:00)
                </li>
                <li>Kỹ thuật: 1800.1763 (7:30 - 22:00)
                </li>
                <li>Khiếu nại: 1800.1062 (8:00 - 21:30)
                </li>
                <li>Bảo hành: 1800.1064 (8:00 - 21:00)
                </li>

                </ul>
            </div>
            <div className="show-service">
                <ul>
                <p>Dịch vụ và quyền lợi</p>
                <li>Mua hàng và thanh toán Online</li>
                <li>Mua hàng trả góp Online</li>
                <li>Tra thông tin đơn hàng</li>
                <li>Tra điểm Smember</li>
                <li>Tra thông tin bảo hành</li>
                <li>Tra cứu hoá đơn điện tử</li>
                <li>Trung tâm bảo hành chính hãng</li>
                <li>Quy định về việc sao lưu dữ liệu</li>
                <li>Dịch vụ bảo hành điện thoại</li>
                </ul>
            </div>
            <div className="show-service2">
                <ul>
                <p>Quy định và chính sách</p>
                <li>Quy chế hoạt động</li>
                <li>Chính sách Bảo hành</li>
                <li>Liên hệ hợp tác kinh doanh</li>
                <li>Đơn Doanh nghiệp</li>
                <li>Ưu đãi từ đối tác</li>
                <li>Tuyển dụng</li>
                <li>Cộng đồng</li>
                </ul>
                <div className="icon-social">
                <a href="https://www.facebook.com/" rel="nofollow">

                <FaFacebookSquare  className={clsx(styles.IconSocial ,styles.face)}/>
                </a>
                <a href="https://www.instagram.com/" rel="nofollow">

                <FaInstagram  className={clsx(styles.IconSocial ,styles.insta)}/>
                </a>

                <a href="https://www.google.com/intl/vi/gmail/about/" rel="nofollow">

                <FaRegEnvelope className={clsx(styles.IconSocial ,styles.email)}/>
                </a>
                <a href="https://www.youtube.com/" rel="nofollow">
                <FaYoutube  className={clsx(styles.IconSocial ,styles.youtube)}/>

                </a>
                </div>
        </div>
        </div>
    </div>
    </>
}

export default Footer;