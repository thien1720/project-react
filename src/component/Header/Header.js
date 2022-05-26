import { useState, useEffect, createContext } from "react";
import { Link, Outlet } from "react-router-dom";
import clsx from "clsx"


import FormLogin from "../FromLogin"
import LogoBrand from "./img-logo/LogoBrand.jpg";
import { BsCartPlus, BsSearch } from "react-icons/bs";
import { FaRegUserCircle, FaBars, FaTimes } from "react-icons/fa";
import styles from "./header.module.css";
// import public from "./public"

const pages = [
    {
        to: "/",
        iteam: "Trang Chủ"
    },
    {
        to: "/lap",
        iteam: "Laptop"
    },
    {
        to: "/tablet",
        iteam: "Tablet"
    },
    {
        to: "/dienthoai",
        iteam: "Điện Thoại"
    },
    {
        to: "/phukien",
        iteam: "PHụ Kiện"
    },
    {
        to: "/baiviet",
        iteam: "Bài Viết"
    }
]

export const ThemContext = createContext()

function Header() {

    const [types, setTypes] = useState("Trang Chủ")
    const [typesMobi, setTypesMobi] = useState("Trang Chủ")

    const [search, setSearch] = useState("")
    const [login, setLogin] = useState(false)
    const [navMobi, setNavMobi] = useState(false)


    function toggleLogin() {
        setLogin(!login)
    }

    function toggleNav() {
        setNavMobi(!navMobi)
    }

    const value = {
        login,
        toggleLogin
    }

    if (navMobi) {
        // console.log("thien")
        document.body.classList.add('useMobi')
    } else {
        // console.log('Thien')
        document.body.classList.remove('useMobi')
    }

    if (login) {
        document.body.classList.add('usePopup')
    } else {
        document.body.classList.remove('usePopup')
    }


    return <div>
        <div className={clsx(styles.Header)}>
            <div>
                <img src={LogoBrand} alt="imgLogo" className={styles.imgLogo} />
            </div>

            <div className={clsx(styles.Header)}>
                <p className="">
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                        placeholder="Tìm kiếm sản phẩm"
                        className={styles.searchHeader}
                    />
                </p>
                <p className={clsx(styles.HeaderInput)}>
                    <BsSearch
                        className={clsx(styles.InputIcon)}
                        onClick={() => setSearch("")}
                    />
                </p>
            </div>

            <div className={clsx(styles.HeaderOption)}>
                <img src="image/header-phone.png" alt="" />
                <img src="image/header-ship.png" alt="" />
                <img src="image/header-map.png" alt="" />
            </div>
        </div>

        <div className={clsx(styles.headerPage)}>
            <div className={clsx(styles.listMobi)}>
                
                    <FaBars
                        className={clsx(styles.StyleIcon)}
                        onClick={toggleNav}
                    />
            </div>

            <div className={clsx(styles.listPageFul)}>
                {
                    pages.map(page =>
                        <Link
                            key={page.iteam}
                            to={page.to}
                            className={clsx(styles.page, types === page.iteam ? styles.iteamStyle : "")}
                            onClick={() => setTypes(page.iteam)}
                        >
                            {page.iteam}
                        </Link>
                    )
                }
                <Outlet />
            </div>

            <div className={clsx(styles.headerLoginPay)}>
                <p className={clsx(styles.Shoping)}>
                    <Link to="/cart">
                        <BsCartPlus className={clsx(styles.StyleIcon, styles.StyleColor)} />
                    </Link>

                </p>
                <p>
                    <FaRegUserCircle
                        className={clsx(styles.StyleIcon)}
                        onClick={toggleLogin} />
                </p>

                <Outlet />
            </div>
        </div>

        <ThemContext.Provider value={value}>
            {login ? <FormLogin /> : undefined}

        </ThemContext.Provider>

        {
            navMobi ? (
                <div className={clsx(styles.overLay )}
                    onClick={toggleNav}
                >
                    <div className={clsx(styles.optionMobi, navMobi ? styles.mobiNav : undefined ) }>
                        <p>
                            <FaTimes className={clsx(styles.hideNav)} 
                            onClick={toggleNav}
                        />
                        </p>
                        <div className={clsx(styles.use)}>
                            <img src="image/image-user.jpg" alt="" />
                            <p className="name-user"> Phạm Văn Thiên</p>
                        </div>

                        <div className={clsx(styles.ListMobi)}>
                            {
                                pages.map(page =>
                                    <Link
                                        key={page.iteam}
                                        to={page.to}
                                        className={clsx(styles.mobiPage, typesMobi === page.iteam ? styles.iteamStyle : "")}
                                        onClick={() => setTypesMobi(page.iteam)}
                                    >
                                        {page.iteam}
                                    </Link>
                                )
                            }
                            <Outlet />
                        </div>

                        <p className={clsx(styles.logOut)}>
                            Đăng xuất
                        </p>
                    </div>
                </div>)
                : undefined
        }
    </div>
}

export default Header

