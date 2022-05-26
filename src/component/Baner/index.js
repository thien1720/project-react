import clsx from "clsx"
// import { IconName } from "react-icons/bs";
import styles from './baner.module.css'

function Banner(props){
    return <>
        <div className={clsx(styles.Banner)}>
            <div className={clsx(styles.banNerNav)}>
                <img src={props.image} alt="baner" />
            </div>
            

        </div>
    </>
}

export default Banner