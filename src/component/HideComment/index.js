import clsx from "clsx";
import { FaRegClock } from "react-icons/fa";

import styles from "./hide.module.css";

function HideCommmet({ comments , text}) {

    function sentMes(){
        text.current.focus()
    }

    // console.log(text)
    if (comments.length === 0) {
        return <>
            <div className={clsx(styles.noComment)}>
                <h6>Nội dung comment:</h6>
                <p>Chưa có bình luận nào</p>
            </div>
        </>
    } else {

        return <div className={clsx(styles.userComment)} >
                <h6>Nội dung comment:</h6>
            {comments.map((comment, index) => {
                return <div className={clsx(styles.renderComment)} key={index}>
                    <div className={clsx(styles.userComment)}>
                        <div className={clsx(styles.customer)}>
                            <div className={clsx(styles.descriptionNav)}>
                                <img src="../image/piano.jpg" alt="" />
                            </div>
                            <div className={clsx(styles.contentComment)}>
                                <h5>{comment.name}</h5>
                                <p>{comment.comment}</p>
                                <span>
                                    <p>
                                        <FaRegClock />
                                        1 phút trước
                                    </p>
                                    <b className={clsx(styles.Sent)} 
                                        onClick={sentMes}
                                    >
                                        Trả lời
                                    </b>
                                </span>

                            </div>
                        </div>

                        <div className={clsx(styles.customer, styles.shopAnser)}>
                            <div className={clsx(styles.descriptionNav)}>
                                <img src="../image/LogoBrand.png" alt="" />
                            </div>
                            <div className={clsx(styles.contentComment)}>
                                <h5>NewTech</h5>
                                <p> 
                                    Newtech xin chào {comment.name}.
                                </p>
                                <span>
                                    <p>
                                        <FaRegClock />
                                        1 phút trước
                                    </p>
                                    <b className={clsx(styles.Sent)} 
                                        onClick={sentMes}
                                    >
                                        Trả lời
                                    </b>
                                </span>

                            </div>
                        </div>
                    </div>

                </div>

            })}
        </div>

    }
}

export default HideCommmet