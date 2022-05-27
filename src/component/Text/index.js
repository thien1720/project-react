import { useState, useRef } from "react"
import clsx from "clsx"
import styles from './text.module.css'

import {FaChevronDown} from "react-icons/fa"

function Text(){

    const [showText, setShowText] = useState(false)
    const [butonShow, setbutonShow] = useState(false)

    const handleShowText = () => {
        setShowText(true)
        setbutonShow(true)
    }

    const show = useRef()

    return <>
        <h3 className={clsx(styles.TextHead)}>Bài Viết Công Nghệ</h3>

        <div 
            className={clsx(styles.ContentText , showText ? styles.ContentTextShow : undefined )}   
        >
            
            <div className={clsx(styles.showText , butonShow ?styles.showText2 :undefined )}>
                <button 
                    className={clsx(styles.showHeight)}
                    onClick={handleShowText}
                >Xem thêm
                    <FaChevronDown />
                </button>

            </div>

            <div className={clsx(styles.FirstText ,styles.iteamText)}>
                <h5>Máy tính xách tay (laptop) - Phục vụ công việc, học tập, giải trí
                </h5>
                <p>Năm 2022, thị trường máy tính xách tay trở nên khó khăn hơn vì sự phát triển về cấu hình và các công nghệ trên các thiết bị di động khác, đặc biệt là điện thoại thông minh. Nhưng không vì thế mà máy tính xách tay (hay còn gọi là laptop) bị lãng quên, công việc văn phòng hiện giờ vẫn ưu tiên máy tính xách tay hơn các thiết bị khác. Trong bối cảnh này, các hãng máy tính, hãng công nghệ đã tung ra nhiều sản phẩm tối ưu đáp ứng đa dạng người dùng hơn. Hiện nay, xu hướng sử dụng thiết bị điện tử thường tập trung vào dòng sản phẩm có mức giá hợp lý, sở hữu thiết kế siêu di động, mỏng nhẹ, thời lượng pin tốt, chế độ ưu đãi và bảo hành.
                </p>
                <p>
                    Giờ đây, những chiếc laptop 2 trong 1 có thể xoay, gập và tách rời, trở thành máy tính bảng hoặc sử dụng máy tính xách tay như thông thường, đáp ứng nhu cầu học tập và giải trí. Ngoài ra, màn hình cảm ứng giúp thao tác người dùng giống hệt như trên máy tính bảng. Bên cạnh đó, người sử dụng có thể chọn những chiếc ultrabook, có cấu hình mạnh hơn, mỏng hơn, độ phân giải lớn, nhỏ gọn có khả năng di động cao, phù hợp với doanh nhân.
                </p>
            </div>

            <div className={clsx(styles.contentImg)}>
                <img src="/image/wrrting/image-lap.jpg" alt="ảnh sản phẩm"/>
            </div>
            <div className={clsx(styles.FirstText ,styles.iteamText)}>
                <h6>Tại sao nên chọn mua laptop</h6>
                <p>-  Có hệ điều hành tối ưu, kèm theo là cấu hình cao để xử lý mọi công việc. <br/>
                    -  Có bàn phím, chuột và các cú pháp hỗ trợ cho công việc tốt hơn các thiết bị khác, có thể bao gồm cảm ứng.<br/>
                    -  Đầy đủ chức năng của một máy tính bàn và khả năng di động cao.<br/>
                    -  Thời lương pin cao.<br/>
                    -  Lưu trữ dữ liệu nhiều hơn.<br/>
                    -  Dễ dàng sửa chữa, nâng cấp.<br/>
                    </p>
                
            </div>
            <div className={clsx(styles.FirstText ,styles.iteamText)}>
                <h6>Lợi ích khi sử dụng laptop
                </h6>
                <p>So với các sản phẩm điện tử hiện đại và tiện lợi khác, laptop nằm ở trong phân khúc giá cao hơn. Tuy nhiên chúng vẫn thu hút được đông đảo người dùng lựa chọn để đồng hành trong công việc và cuộc sống bởi chúng có những lợi ích nổi bật như sau:
                    -       Laptop được trang bị hệ điều hành tối ưu, kèm theo đó là cấu hình đa dạng, ở nhiều mức độ khác nhau giúp người dùng có thể xử lý mọi công việc.<br/>
                    -       Laptop được trang bị bàn phím, chuột và các cú pháp tiện dụng mang lại sự thuận lợi giúp công việc được hoàn thiện một cách tốt hơn so với các thiết bị khác. Một số dòng laptop cao cấp có kèm theo màn cảm ứng tiện nghi.
                    -       Laptop có đầy đủ các chức năng của một máy tính bàn và tính di động cao <br/>
                    -       Dung lượng pin lớn mang đến sự tiện lợi. Đặc biệt là đối với người thường xuyên phải ra ngoài làm việc.<br/>
                    -       Khả năng lưu trữ dữ liệu trên laptop nhiều hơn.<br/>
                    -       Sửa chữa và nâng cấp đơn giản, nhanh chóng.<br/>
                    </p>
                

                <h6>Các loại laptop phổ biến</h6>
                <p>
                    Máy tính xách tay thông thường là dòng sản phẩm được trang bị đầy đủ các tính năng để có thể thực hiện được các tác vụ cơ bản, nhẹ nhàng như lướt web, kiểm tra email hoặc là xử lý các công việc văn phòng khác.
                </p>
                <p>Do dòng máy tính này có cấu hình khá cơ bản và trang bị bình dân nhất nên giá cả của chúng khá phải chăng. Mọi đối tượng khách hàng đều có thể sở hữu chúng.</p>

                <p>Laptop sinh viên, văn phòng</p>

                <p>Laptop đồ họa</p>
                <p>Laptop gaming</p>
                <p>laptop doanh nhân</p>
                <p>laptop mỏng nhẹ</p>


                <h6>Các tiêu chí chọn mua laptop chất lượng vượt trội</h6>
                <p>Với sự đa dạng và phong phú về các loại laptop trên thị trường nên đôi khi người dùng khá khó để có thể lựa chọn được sản phẩm phù hợp, đáp ứng tối đa nhu cầu sử dụng. Chính vì vậy các tiêu chí chọn mua laptop chất lượng vượt trội dưới đây sẽ giúp bạn nhanh chóng có được lựa chọn tốt nhất cho mình.</p>

                <h6>Thương hiệu</h6>
                <p>Có lẽ thương hiệu là yếu tố đầu tiên mà người dùng thường để ý khi có nhu cầu mua laptop. Trên thị trường laptop hiện nay nổi bật với những cái tên như: Dell, Asus, Lenovo, Macbook, Acer,... vô cùng đa dạng.</p>
                <p>Mỗi thương hiệu sẽ có những ưu, nhược điểm khác nhau nhưng đều thể hiện được sự vượt trội của mình ở một dòng sản phẩm nhất định. Từ đó mang tới cho khách hàng nhưng sự lựa chọn đa dạng và phù hợp nhất với nhu cầu sử dụng của mình</p>

                <h6>Tính năng</h6>
                <p>Với dòng laptop được thiết kế chuyên biệt như laptop gaming, đồ hoạ hoặc là các dòng laptop cao cấp sẽ có các tính năng riêng biệt như bảo mật vân tay, màn hình gập, màn hình cảm ứng, camera, âm thanh,...</p>

                <h6>Cấu hình
                </h6>
                <p>Cấu hình của máy tính là yếu tố rất quan trọng ảnh hưởng tới khả năng xử lý của laptop. Mỗi một công việc, một nhu cầu sử dụng khác nhau sẽ đòi hỏi một cấu hình tương ứng để có thể xử lý tốt các công việc. Chính vì thế vậy bạn hãy tham khảo kỹ các yếu tố về cấu hình như: vi xử lý CPU, RAM, ổ cứng, card đồ hoạ trước khi lựa chọn nhé.</p>
                <p>Nếu bạn chỉ dùng để xử lý các tác vụ văn phòng nhẹ nhàng hoặc sử dụng để lướt web, nghe nhạc hay xem phim thì chỉ cần những chiếc laptop có cấu hình bình thường. Tuy nhiên nếu công việc của bạn cần phải sử dụng các ứng dụng nặng như đồ hoạ, lập trình,... thì cần đầu tư chiếc laptop có cấu hình khoẻ, vi xử lý core i5 trở lên, card đồ hoạ rời, RAM từ 8GB,... để xử lý mọi tác vụ mượt mà nhé.</p>

                <h6>Màn hình</h6>
                <p>
                    Màn hình là thiết bị mà bạn tiếp xúc thường xuyên khi sử dụng laptop do đó nên công nghệ màn hình cũng rất quan trọng và ảnh hưởng trực tiếp tới trải nghiệm sử dụng của bạn.
                    <br/>
                    Đối với những người làm thiết kế đồ hoạ, màn hình cần được sử dụng công nghệ mới để mang lại chất lượng tốt nhất và màu sắc chân thực. Từ đó giảm thiểu tối đa tình trạng nhòe nét với những góc độ khác nhau. Thậm chí chúng còn góp phần giảm thiểu tình trạng mỏi mắt đối với những người có tần suất sử dụng liên tục trong nhiều giờ liền.
                </p>

                <h6>Cổng kết nối</h6>
                <p>Hiện tại, một số dòng laptop được thiết kế mỏng nhẹ, chạy theo xu hướng sẽ lược bỏ một số cổng kết nối. Chính vì vậy, tuỳ thuộc vào công việc của bạn có đòi hỏi phải kết nối với các thiết bị ngoại vi hoặc chia sẻ màn hình, dữ liệu hay không để các bạn có thể lựa chọn thiết kế mỏng nhẹ, nhỏ gọn.</p>

                <h6>Thời lượng pin</h6>
                <p>Nếu bạn đang mua một máy tính xách tay có thiết kế hơi cồng kềnh thì bạn sẽ chỉ sử dụng trên bàn gần ổ cắm điện nên bạn không phải lo lắng về thời lượng pin. Tuy nhiên, nếu bạn là người hay phải làm việc bên ngoài, hay phải di chuyển thì dung lượng pin ít nhất được 7 giờ bền bỉ hoặc 8 giờ trở lên là lý tưởng.

                </p>

                <h6>Bàn phím và toochpad</h6>
                <p>Bàn phím và touchpad cũng là yếu tố ảnh hưởng tới quyết định chọn mua laptop của bạn. Nếu bạn định làm việc nhiều trên máy tính thì hãy lựa chọn loại bàn phím có độ nảy tốt, hành trình phím ngắn để mang lại cảm giác tốt hơn khi sử dụng.</p>
                <p>Ngoài ra, một bàn di chuột tốt sẽ giúp thao tác với con trỏ nhanh và phản hồi nhất quán với các cử chỉ cảm ứng đa điểm như là chụm để thu phóng. Đặc biệt, nếu bạn đang tìm kiếm chiếc laptop cho doanh nhân, hãy cân nhắc nub giữa các phím G và H để bạn có thể dễ dàng điều hướng xung quanh màn hình.</p>

                <h6>Phân khúc giá</h6>
                <p>Hiện tại laptop trên thị trường đang được bán với rất nhiều mức giá khác nhau. Bạn có thể sở hữu một chiếc laptop mới chỉ với giá hơn 5 triệu đồng. Tuy nhiên những trang bị và tính năng trên máy thường giới hạn và chỉ giải quyết được các công việc nhẹ nhàng.</p>
                <p>Trong trường hợp bạn có thể chi tiêu nhiều hơn, bạn sẽ nhận được một hệ thống chất lượng tốt hơn, hiệu suất mạnh hơn và màn hình hiển thị sống động hơn. Từ đó, trải nghiệm mang lại sẽ ấn tượng hơn.</p>
                
            </div>
        </div>
    </>
}

export default Text