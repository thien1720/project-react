import styles from "./pagenav.module.css";
import clsx from "clsx";
import CardIteam from "../../../component/Card";
import CardNav from "../../../component/CardNav";

function IteamNavs() {
  return (
    <>
      <div className="layout-grid col-md-9 col-sm-12">

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
            image="/image/Tab/tabMac.jpg"
            title="iPad 10.2 2021 WiFi 64GB | Chính hãng Apple Việt Nam"
            coins={9900000}
            saleCoin={10250000}
            description="Thu cũ lên đời giá cao-Trợ giá thêm tới 1 triệu"
          />

          <CardNav
            image="/image/Tab/xioamiPad5.jpg"
            title="Xiaomi Pad 5 (6GB/256GB)"
            coins={9890000}
            // saleCoin={14990000}
            description="Tặng phiếu mua hàng : 150.000đ"
          />

          <CardNav
            image="/image/Tab/ipad-mini-6.jpg"
            title="Apple iPad mini 6 4G 256GB | Chính hãng Apple Việt Nam"
            coins={22890000}
            saleCoin={24100000}
            description="Thu cũ lên đời giá cao-Trợ giá thêm tới 1 triệu"
          />

          <CardNav
            image="/image/Tab/tab-m10-gen-2.jpg"
            title="Lenovo Tab M10 - Gen 2"
            coins={6190000}
            saleCoin={6590000}
            description="Mua phụ kiện giảm đến 40%"
          />

          <CardNav
            image="/image/Tab/tab-m11pro.png"
            title="Apple iPad Pro 11 M1 WiFi 128GB I Chính hãng Apple Việt Nam"
            coins={23200000}
            saleCoin={25290000}
            description="Thu cũ đổi mới trợ giá lên đến 1.000.000đ"
          />

          <CardNav
            image="/image/Tab/huawei-matepad-11.jpg"
            title=" Huawei MatePad 11"
            coins={12990000}
            saleCoin={13890000}
            description="Thu cũ đổi mới trọn đời"
          />

          <CardNav
            image="/image/Tab/samsung-galaxy-tab-a8.jpg"
            title="Lenovo-Tap-P11plus"
            coins={8190000}
            saleCoin={9590000}
            description="Phần Mềm Diệt Virus, Office chính hãng chỉ từ 150k"
          />
        </div>

      </div>
    </>
  );
}

export default IteamNavs;
