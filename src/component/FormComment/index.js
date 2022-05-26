import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { useFormik } from "formik"
import * as Yup from "yup"
import styles from './comment.module.css';
import HideCommmet from "../HideComment";

function Comment() {
    const text = useRef()


    const [useCom, setUseCom] = useState(() => {
        const storeComment = JSON.parse(localStorage.getItem('comment'))

        return storeComment ?? []
    })
    
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            comment: ""
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Vui lòng nhập trường này."),
            email: Yup.string()
                .required("Vui lòng nhập email.")
                .email("Nhập đúng email của bạn chưa đúng.")

        }),
        onSubmit :(values, {resetForm}) => {
                setUseCom((prev) => {
                    const useComments = [...prev, values]
                    const localStore = JSON.stringify(useComments)
                    localStorage.setItem('comment', localStore)
                    return useComments
                })
                resetForm({values:""})
                text.current.focus()
            }   

    })

    return <div className="form-input-list ">
        <form className="login-iteam"
            onSubmit={formik.handleSubmit}
        >
            <div className={clsx(styles.nameEmail)}>
                <div className={clsx(styles.formCheck)}>
                    <label htmlFor="name">Họ và tên</label>
                    <input
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Nhập tên đầy đủ "
                        className="fullname-sub "
                    />
                    {formik.errors.name && formik.touched.name && (
                        <p className={clsx(styles.warning)}>{formik.errors.name}</p>)}
                </div>
                <div className={clsx(styles.formCheck)}>
                    <label htmlFor="email">Email</label>
                    <input
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Nhập email "
                        className="email-sub "
                    />
                    {formik.errors.email && formik.touched.email && (
                        <p className={clsx(styles.warning)}>{formik.errors.email}</p>)}
                </div>
            </div>
            <div className={clsx(styles.formComment)}>
                <label htmlFor="formComment">Comment</label>
                <textarea
                    id="formComment"
                    value={formik.values.comment}
                    onChange={formik.handleChange}
                    ref={text}
                    name="comment"
                    rows="9"
                    cols="80"
                    placeholder="Thông tin cần điền"
                    className={styles.Comment}
                >
                </textarea>

            </div>

            <div className={clsx(styles.subForm)}>
                <button
                    type="submit"
                >Gửi đánh giá</button>
            </div>
        </form>

        <HideCommmet comments={useCom}  text={text}/>

    </div>
}

export default Comment