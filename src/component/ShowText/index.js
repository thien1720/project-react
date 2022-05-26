import clsx from "clsx"

import { FaRegClock } from "react-icons/fa";
import styles from "./show.module.css"


function ShowText({ image, title, description, navIcon, time, head ,sizeImg }) {
    return <>
        <div className="content-iteam">
            <div className={clsx(styles.Iteam)}>
                <div className={clsx(sizeImg ?styles.sizeImg :styles.styleImg )}>
                    <img src={image} alt="" />
                </div>
                <div className={clsx(styles.contentText)}>
                    <h6 className={clsx(head ? styles.head : styles.headText)}>{title}</h6>
                    {description ? <p className={clsx(styles.description)}>{description}</p> : undefined}
                    <p className={clsx(time ? styles.time : styles.time)}>
                        <FaRegClock className={clsx(navIcon ? styles.navIcon : styles.icon)} />
                        22/02/2022
                    </p>
                </div>

            </div>
        </div>
    </>
}

export default ShowText;