import clsx from 'clsx'
import { FaCheckCircle } from "react-icons/fa";
import styles from './popup.module.css';

function Popup(props){
    return <>
        <div className={clsx(styles.popUpIteam)}>
            <p><FaCheckCircle className={clsx(styles.check)}/></p>
            <p className={clsx(styles.name)}>{props.name}<br></br>
            <i>Bạn đã đặt hàng thành công.</i>
            </p>
            
        </div>
    </>
}
export default Popup;