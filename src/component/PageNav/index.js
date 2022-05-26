import styles from "./pagenav.module.css";
import clsx from "clsx";
import CardNav from "../CardNav";

function IteamNavs() {
  return (
    <>
      <div className="layout-grid col-md-9 col-sm-12">
        {/* <div className="container"> */}
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
              image="image/Lap/asusZenbookF15.jpg"
              title="Laptop ASUS Gaming FX506LH-HN002T"
              coins={21900000}
              saleCoin={24900000}
              description="Phần Mềm Diệt Virus, Office chính hãng chỉ từ 150k"
            />

            <CardNav
              image="image/Lap/surface.jpg"
              title="Laptop HP 14-DQ2055WM 39K15UA - Nhập khẩu chính hãng"
              coins={13900000}
              saleCoin={14990000}
              description="Phần Mềm Diệt Virus, Office chính hãng chỉ từ 150k"
            />

            <CardNav
              image="image/Lap/hp-victus.png"
              title="Laptop HP Gaming VICTUS 16-e0175AX - 4R0U8PA - Chính hãng"
              coins={23890000}
              saleCoin={24990000}
              description="Phần Mềm Diệt Virus, Office chính hãng chỉ từ 150k"
            />

            <CardNav
              image="image/Lap/Macbook Pro 13.png"
              title="Apple M1 - MacBook Pro 13'' 512GB- Chính hãng Apple Việt Nam"
              coins={36000000}
              saleCoin={38000000}
              description="Mua phụ kiện giảm đến 40%"
            />

            <CardNav
              image="image/Lap/asusZenbook-gaming.png"
              title="Laptop Dell Gaming G15 5511"
              coins={22990000}
              saleCoin={23890000}
              description="Phần Mềm Diệt Virus, Office chính hãng chỉ từ 150k"
            />

            <CardNav
              image="image/Lap/vivobook.png"
              title="Laptop ASUS Vivobook X512JA-211 - Nhập khẩu chính hãng"
              coins={19900000}
              saleCoin={21210000}
              description="Phần Mềm Diệt Virus, Office chính hãng chỉ từ 150k"
            />

            <CardNav
              image="image/Lap/macAir.jpg"
              title="Apple MacBook Air M1 16GB 256GB 2020 I Chính hãng Apple Việt Nam"
              coins={23000000}
              saleCoin={25000000}
              description="Thu cũ lên đời giá cao - Trợ giá lên tới 1.000.000đ"
            />
          </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default IteamNavs;
