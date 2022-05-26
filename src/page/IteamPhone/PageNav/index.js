import styles from "./pagenav.module.css";
import clsx from "clsx";
import CardItam from "../../../component/Card";
import CardNav from "../../../component/CardNav"

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
              image="/image/menuPhone/flip-3.webp"
              title="Samsung Galaxy Z Flip3 5G"
              coins={21900000}
              saleCoin={24900000}
              description="Phần Mềm Diệt Virus, Office chính hãng chỉ từ 150k"
            />

            <CardNav
              image="/image/menuPhone/oppoReno6.png"
              title="OPPO Reno6 5G - Chính Hãng"
              coins={13900000}
              saleCoin={14990000}
              description="Phần Mềm Diệt Virus, Office chính hãng chỉ từ 150k"
            />

            <CardNav
              image="/image/menuPhone/ip13-pro_2.jpg"
              title="iPhone 13 128GB | Chính hãng VN/A"
              coins={23890000}
              saleCoin={24990000}
              description="Phần Mềm Diệt Virus, Office chính hãng chỉ từ 150k"
            />

            <CardNav
              image="/image/menuPhone/samsung-galaxy-z-fold-3.jpg"
              title="Samsung Galaxy Z Fold3 5G 256GB"
              coins={46210000}
              saleCoin={43900000}
              description="Mua phụ kiện giảm đến 40%"
            />

            <CardNav
              image="/image/menuPhone/vivoV23.png"
              title="Vivo V23 5G"
              coins={13190000}
              saleCoin={14000000}
              description="Thu cũ đổi mới trọn đời"
            />

            <CardNav
              image="/image/menuPhone/xiaomi11life.png"
              title="Xiaomi 11 Lite 5G NE 8GB - 256GB"
              coins={8200000}
              saleCoin={9990000}
              description="Phần Mềm Diệt Virus, Office chính hãng chỉ từ 150k"
            />

            <CardNav
              image="/image/menuPhone/xiomi11T.png"
              title="Xiaomi 11 Lite 5G NE 8GB - 256GB"
              coins={12990000}
              saleCoin={13890000}
              description="Thu cũ lên đời giá cao - Trợ giá lên tới 1.000.000đ"
            />
          </div>
        
      </div>
    </>
  );
}

export default IteamNavs;
