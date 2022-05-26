import clsx from "clsx"
import {useFormik} from "formik"
import * as Yup from "yup"

import styles from './login.module.css'

function Registrantion() {

    const formik = useFormik({
        initialValues:{
            name:"",
            email:"", 
            password:"",
            confirmPassword:"",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Vui lòng nhập trường này."),
            email: Yup.string()
                .required("Vui lòng nhập tên của bạn.")
                .email( "Nhập đúng email của của bạn."),
            password : Yup.string()
                .required("Vui lòng nhập mật khẩu của bạn.")
                .min(8, "Độ dài tối thiểu là 8 kí tự."),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password')], 'Mật khẩu nhập lại không chính xác!')
                .required('Vui lòng nhập trường này')
        }),
        onSubmit: values =>{
            console.log(values);
        }
    })

    return <>
        <form onSubmit={formik.handleSubmit}>
            {/* name */}
        <div className={clsx(styles.iteamInput)}>
            <label htmlFor={"name1"}>Họ Và Tên</label>
            <input
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="name"
                id="name1"
                type="text"
                placeholder=""
                className="fullname-sub"
            />
            {formik.errors.name && formik.touched.name && (
           <p className={clsx(styles.warning)}>{formik.errors.name}</p>)}
        </div>
            {/* email */}

        <div className={clsx(styles.iteamInput)}>
            <label htmlFor={"email1"}>Email</label>
            <input
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="email"
                id="email1"
                type="text"
                placeholder=""
                className="fullname-sub"
            />
            {formik.errors.email && formik.touched.email && (
           <p className={clsx(styles.warning)}>{formik.errors.email}</p>)}
        </div>
            {/* mật khẩu */}
        <div className={clsx(styles.iteamInput)}>
            <label htmlFor={"password1"}>Mật khẩu</label>
            <input
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="password"
                id="password1"
                type="password"
                placeholder=""
                className="fullname-sub"
            />
            {formik.errors.password && formik.touched.password && (
            <p className={clsx(styles.warning)}>{formik.errors.password}</p>)}
        </div>
            {/* nhập lại mật khẩu */}
        <div className={clsx(styles.iteamInput)}>
            <label htmlFor={"confirm1"}>Nhập Lại Mật Khẩu</label>
            <input
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="confirmPassword"
                id="confirm1"
                type="password"
                placeholder=""
                className="fullname-sub"
            />
            {formik.errors.confirmPassword && formik.touched.confirmPassword && (
           <p className={clsx(styles.warning)}>{formik.errors.confirmPassword}</p>)}
        </div>

        <div className={clsx(styles.subForm)}>
            <button className={clsx(styles.subBtn)}>
              Đăng ký            
            </button>
        </div>


        </form>
    </>
}

export default Registrantion