import styles from "./pagenav.module.css";
import clsx from "clsx";
import CardIteam from "../../../component/Card";
import CardNav from "../../../component/CardNav";

function IteamNavs() {
  return (
    <>
      <div class="layout-grid col-md-9 col-sm-12">
  
          <div className={clsx(styles.Option)}>
            <button className={clsx(styles.listFilter)}>
              Bộ Lọc sản phẩm
            </button>


            <select>
              <option>Sắp xếp theo</option>
              <option>Giá cao đến thấp </option>
              <option>Giá thấp đến cao </option>
              <option>Sản phẩm mới nhất</option>
            </select>
          </div>
          <div className="row">
            <CardNav
              image="image/Acccers/camera-ip-wifi-tp-link-tapo-c200-360.jpg"
              title="Camera IP hồng ngoại Wifi Ezviz 1080p 2MP"
              coins={590000}
              saleCoin={740000}
              description="Bảo hành 6 tháng chính hãng"
            />

            <CardNav
              image="image/Acccers/sac-nhanhAnker.jpg"
              title="Sạc nhanh Anker Powerport III Nano 20W"
              coins={300000}
              saleCoin={450000}
              description="Bảo hành 6 tháng chính hãng"
            />

            <CardNav
              image="image/Acccers/chuot-logitech.jpg"
              title="Chuột không dây Logitech M331"
              coins={300000}
              saleCoin={400000}
              description="Bảo hành 6 tháng chính hãng"
            />

            <CardNav
              image="image/Acccers/op-lung-samsung-galaxy-z-flip-3.jpg"
              title="Ốp lưng Samsung Galaxy Z Flip3 Silicone Cover with Strap"
              coins={900000}
              saleCoin={1010000}
              description="Bảo hành 6 tháng chính hãng"
            />

            <CardNav
              image="image/Acccers/apple-airpods-max-2.jpg"
              title="Tai nghe chống ồn AirPods Max - Chính hãng Apple"
              coins={10900000}
              saleCoin={13890000}
              description="Bảo hành 12 tháng chính hãng"
            />

            <CardNav
              image="image/Acccers/pin-du-phong-xiaomi-10000.jpg"
              title="Pin dự phòng Polymer 10.000mAh Xiaomi Mi Fast Charge Power Bank 3"
              coins={590000}
              saleCoin={630000}
              description="Bảo hành 6 tháng chính hãng"
            />

            <CardNav
              image="image/Acccers/camera-hanh-trinh-gopro-hero-8_.jpg"
              title="Camera hành trình Gopro Hero 9"
              coins={10790000}
              saleCoin={11900000}
              description="Bảo hành 6 tháng chính hãng"
            />
          </div>
       
      </div>
    </>
  );
}

export default IteamNavs;
