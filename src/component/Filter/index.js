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
                                        <BsXLg className={styles.unFilter}/>
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
                            <div className={clsx(styles.navOption,"mt-4")} >
                                <h6>Hãng sản xuất:</h6>
                                <div className={clsx(styles.useCheck)}>
                                    <form action="" className={clsx(styles.styleOption)}>
                                        <input type="checkbox" name="brand" value="Apple"/>
                                    
                                        <span>Apple</span>
                                        <br/>
                                        <input type="checkbox" name="brand" value="Dell"/>
                                    
                                        <span>Dell</span>
                                        <br/>
                                        <input type="checkbox" name="brand" value="Hp"/>
                                    
                                        <span>Hp</span>
                                        <br/>
                                        <input type="checkbox" name="brand" value="lenovo"/>
                                    
                                        <span>lenovo</span>
                                        <br/>
                                        <input type="checkbox" name="brand" value="Asus"/>
                                    
                                        <span>Asus</span>
                                        <br/>
                                    </form>
                                </div>
                            </div>

                            {/* lọc theo giá sản phẩm */}
                            <div className={clsx(styles.navOption,"mt-4")} >
                                <h6>Mức giá:</h6>
                                <div className={clsx(styles.useCheck)}>
                                    <form action="" className={clsx(styles.styleOption)}>
                                        <input type="checkbox" name="brand" value="Dưới 10 triệu"/>
                                    
                                        <span>Dưới 10 triệu</span>
                                        <br/>
                                        <input type="checkbox" name="brand" value="Từ 10- 15 triệu"/>
                                    
                                        <span>Từ 10- 15 triệu</span>
                                        <br/>
                                        <input type="checkbox" name="brand" value="Từ 15- 20 triệu"/>
                                    
                                        <span>Từ 15- 20 triệu</span>
                                        <br/>
                                        <input type="checkbox" name="brand" value="Từ 20- 25 triệu"/>
                                    
                                        <span>Từ 20- 25 triệu</span>
                                        <br/>
                                        <input type="checkbox" name="brand" value="Trên 25 triệu"/>
                                    
                                        <span>Trên 25 triệu</span>
                                        <br/>
                                    </form>
                                </div>
                            </div>

                            {/* <!-- lọc theo CPU sản phẩm--> */}
                            <div className={clsx(styles.navOption,"mt-4")} >
                                <h6>CPU:</h6>
                                <div className={clsx(styles.useCheck)}>
                                    <form action="" className={clsx(styles.styleOption)}>
                                        <input type="checkbox" name="brand" value="Intel core i3"/>
                                    
                                        <span>Intel core i3</span>
                                        <br/>
                                        <input type="checkbox" name="brand" value="Intel core i5"/>
                                    
                                        <span>Intel core i5</span>
                                        <br/>
                                        <input type="checkbox" name="brand" value="Intel core i7"/>
                                    
                                        <span>Intel core i7</span>
                                        <br/>
                                        <input type="checkbox" name="brand" value="Intel core i9"/>
                                    
                                        <span>Intel core i9</span>
                                        <br/>
                                        <input type="checkbox" name="brand" value="Amd ryzen 3"/>
                                    
                                        <span>Amd ryzen 3</span>
                                        <br/>
                                        <input type="checkbox" name="brand" value="Amd ryzen 5"/>
                                    
                                        <span>Amd ryzen 5</span>
                                        <br/>
                                        <input type="checkbox" name="brand" value="Amd ryzen 7"/>
                                    
                                        <span>Amd ryzen 7</span>
                                        <br/>
                                        <input type="checkbox" name="brand" value="Amd ryzen 9"/>
                                    
                                        <span>Amd ryzen 9</span>
                                        <br/>
                                    </form>
                                </div>
                            </div>

                            {/* <!-- lọc theo Ram sản phẩm--> */}
                            <div className={clsx(styles.navOption,"mt-4")} >
                                <h6>RAM:</h6>
                                <div className={clsx(styles.useCheck)}>
                                    <form action="" className={clsx(styles.styleOption)}>
                                        <input type="checkbox" name="brand" value="4GB"/>
                                    
                                        <span>4GB</span>
                                        <br/>
                                        <input type="checkbox" name="brand" value="8GB"/>
                                    
                                        <span>8GB</span>
                                        <br/>
                                        <input type="checkbox" name="brand" value="16GB"/>
                                    
                                        <span>16GB</span>
                                        <br/>
                                        <input type="checkbox" name="brand" value="32GB"/>
                                    
                                        <span>32GB</span>
                                        <br/>
                                        
                                    </form>
                                </div>
                            </div>

                            {/* <!-- lọc theo Ổ cứng sản phẩm--> */}
                            <div className={clsx(styles.navOption,"mt-4")} >
                                <h6>Ổ cứng</h6>
                                <div className={clsx(styles.useCheck)}>
                                    <form action="" className={clsx(styles.styleOption)}>
                                        <input type="checkbox" name="brand" value="SSD 128GB"/>
                                    
                                        <span>SSD 128GB</span>
                                        <br/>
                                        <input type="checkbox" name="brand" value="SSD 256GB"/>
                                    
                                        <span>SSD 256GB</span>
                                        <br/>
                                        <input type="checkbox" name="brand" value="SSD 512GB"/>
                                    
                                        <span>SSD 512GB</span>
                                        <br/>
                                        <input type="checkbox" name="brand" value="SSD 1T"/>
                                    
                                        <span>SSD 1T</span>
                                        <br/>
                                        
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
    </>
}

export default Filter