import clsx from "clsx";
import { BsXLg } from "react-icons/bs";
import styles from './filter.module.css';

function Filter() {
    return <>
        <div className={clsx(styles.layoutGridOption, "col-md-3 col-sm-0")}>
            <div className={clsx(styles.filterOption)}>
                <div className={clsx(styles.iteamSub)}>

                    <div className={clsx(styles.filterSub)}>
                        <p className="iteam-fillter">
                            Bộ lọc:
                        </p>
                        <BsXLg className={styles.unFilter} />
                        {/* <i className="fa-solid fa-xmark"></i> */}
                    </div>
                    <div className={clsx(styles.filterRender)}>
                        <form action="" >
                        </form>
                    </div>
                </div>

                <div className={clsx(styles.filterApply)}>
                    <button className={clsx(styles.subApply)}>Áp dụng</button>
                </div>

                {/* lọc theo tên sản phẩm */}
                <div className={clsx(styles.navOption, "mt-4")} >
                    <h6>Hãng sản xuất:</h6>
                    <div className={clsx(styles.useCheck)}>
                        <form action="" className={clsx(styles.styleOption)}>
                            <input type="checkbox" name="brand" value="Apple"/>

                                <span>Apple</span>
                                <br />
                                <input type="checkbox" name="brand" value="Xiaomi"/>

                                    <span>Xiaomi</span>
                                    <br />
                                    <input type="checkbox" name="brand" value="Lenovo"/>

                                        <span>Lenovo</span>
                                        <br />
                                        <input type="checkbox" name="brand" value="SanSung"/>

                                            <span>SanSung</span>
                                            <br />
                                            <input type="checkbox" name="brand" value="Huawei"/>

                                                <span>Huawei</span>
                                                <br />
                                            </form>
                                        </div>
                                    </div>

                                    {/* lọc theo giá sản phẩm */}
                                    <div className={clsx(styles.navOption, "mt-4")} >
                                        <h6>Mức giá:</h6>
                                        <div className={clsx(styles.useCheck)}>
                                            <form action="" className={clsx(styles.styleOption)}>
                                            <input type="checkbox" name="brand" value="Dưới 5 triệu"/>
                                    
                                            <span>Dưới 5 triệu</span>
                                            <br/>
                                            <input type="checkbox" name="brand" value="Từ 5- 10 triệu"/>
                                        
                                            <span>Từ 5- 10 triệu</span>
                                            <br/>
                                            <input type="checkbox" name="brand" value="Từ 10- 15 triệu"/>
                                        
                                            <span>Từ 10- 15 triệu</span>
                                            <br/>
                                            <input type="checkbox" name="brand" value="Từ 15- 25 triệu"/>
                                        
                                            <span>Từ 15- 25 triệu</span>
                                            <br/>
                                            <input type="checkbox" name="brand" value="Trên 25 triệu"/>
                                        
                                            <span>Trên 25 triệu</span>
                                            <br/>
                                            </form>
                                        </div>
                                    </div>
                                    

                                    {/* <!-- lọc theo Ram sản phẩm--> */}
                                    <div className={clsx(styles.navOption, "mt-4")} >
                                        <h6>RAM:</h6>
                                        <div className={clsx(styles.useCheck)}>
                                            <form action="" className={clsx(styles.styleOption)}>
                                            <input type="checkbox" name="brand" value="2GB"/>
                                    
                                            <span>2GB</span>
                                            <br/>
                                            <input type="checkbox" name="brand" value="3GB"/>
                                        
                                            <span>3GB</span>
                                            <br/>
                                            <input type="checkbox" name="brand" value="4GB"/>
                                        
                                            <span>4GB</span>
                                            <br/>
                                            <input type="checkbox" name="brand" value="6GB"/>
                                        
                                            <span>6GB</span>
                                            <br/>
                                            <input type="checkbox" name="brand" value="8GB"/>
                                        
                                            <span>8GB</span>
                                            <br/>

                                            </form>
                                        </div>
                                    </div>

                                    {/* <!-- lọc theo Ổ cứng sản phẩm--> */}
                                    <div className={clsx(styles.navOption, "mt-4")} >
                                        <h6>Bộ nhớ:</h6>
                                        <div className={clsx(styles.useCheck)}>
                                            <form action="" className={clsx(styles.styleOption)}>
                                            <input type="checkbox" name="brand" value="8GB"/>
                                    
                                            <span>8GB</span>
                                            <br/>
                                            <input type="checkbox" name="brand" value="166GB"/>
                                        
                                            <span>166GB</span>
                                            <br/>
                                            <input type="checkbox" name="brand" value="32GB"/>
                                        
                                            <span>32GB</span>
                                            <br/>
                                            <input type="checkbox" name="brand" value="64GB"/>
                                        
                                            <span>64GB</span>
                                            <br/>
                                            <input type="checkbox" name="brand" value="128GB"/>
                                        
                                            <span>128GB</span>
                                            <br/>

                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </>
}
                        export default Filter