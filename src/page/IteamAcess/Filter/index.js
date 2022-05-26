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
                    <form action="" class="style-option">
                                        <input type="checkbox" name="brand" value="Apple"/>
                                    
                                        <span>Apple</span>
                                        <br/>
                                        <input type="checkbox" name="brand" value="Anker"/>
                                    
                                        <span>Anker</span>
                                        <br/>
                                        <input type="checkbox" name="brand" value="SanSung"/>
                                    
                                        <span>SanSung</span>
                                        <br/>
                                        <input type="checkbox" name="brand" value="Sony"/>
                                    
                                        <span>Sony</span>
                                        <br/>
                                        <input type="checkbox" name="brand" value="Logitech"/>
                                    
                                        <span>Logitech</span>
                                        <br/>
                                    </form>
                    </div>
                </div>

                {/* lọc theo giá sản phẩm */}
                <div className={clsx(styles.navOption, "mt-4")} >
                        <h6>CPU:</h6>
                                <div class="user-check">
                                    <form action="" class="style-option">
                                        <input type="checkbox" name="brand" value="Tai nghe"/>
                                    
                                        <span>Tai nghe</span>
                                        <br/>
                                        <input type="checkbox" name="brand" value="Pin dự phòng"/>
                                    
                                        <span>Pin dự phòng</span>
                                        <br/>
                                        <input type="checkbox" name="brand" value="Ốp lưng"/>
                                    
                                        <span>Ốp lưng</span>
                                        <br/>
                                        <input type="checkbox" name="brand" value="Loa"/>
                                    
                                        <span>Loa</span>
                                        <br/>
                                        <input type="checkbox" name="brand" value="Router"/>
                                    
                                        <span>Router</span>
                                        <br/>
                                        <input type="checkbox" name="brand" value="Router"/>
                                    
                                        <span>Router</span>
                                        <br/>
                                        <input type="checkbox" name="brand" value="Camera"/>
                                    
                                        <span>Camera</span>
                                        <br/>
                                        <input type="checkbox" name="brand" value="Chuột máy tính"/>
                                    
                                        <span>Chuột máy tính</span>
                                        <br/>
                                    </form>
                                </div>
                </div>

               

               

                
                    </div>
    </div>
</>
}
export default Filter