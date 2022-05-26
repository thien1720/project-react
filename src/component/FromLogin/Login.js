import clsx from "clsx"
import {useFormik} from "formik"
import * as Yup from "yup"

import styles from './login.module.css'

function Login() {

    const formik = useFormik({
        initialValues:{
            email:"", 
            password:"",
        },
        validationSchema: Yup.object({
            email: Yup.string()
            .required("Vui lòng nhập tên của bạn.")
            .email( "Nhập đúng email của của bạn."),
            password : Yup.string()
            .required("Vui lòng nhập mật khẩu của bạn.")
            .min(8, "Độ dài tối thiểu là 8 kí tự.")
        }),
        onSubmit: values =>{
            console.log(values);
        }
    })
    



    return <>
        <form onSubmit={formik.handleSubmit}>
        <div className={clsx(styles.iteamInput)}>
            <label htmlFor={"email"}>Email</label>
            <input
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="email"
                type="text"
                placeholder=""
                className="fullname-sub"
            />
           {formik.errors.email && formik.touched.email && (
           <p className={clsx(styles.warning)}>{formik.errors.email}</p>)}
        </div>

        <div className={clsx(styles.iteamInput)}>
            <label htmlFor={'password'}>Mật Khẩu</label>
            <input
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="password"
                type="text"
                placeholder=""
                className="fullname-sub"
            />
            {formik.errors.password && formik.touched.password && (
            <p className={clsx(styles.warning)}>{formik.errors.password}</p>)}

        </div>

        <div className="check-input">
            <input  type="checkbox" /> Nhớ mật khẩu
        </div>

        <div className={clsx(styles.subForm)}>
            <button className={clsx(styles.subBtn)}>
              Đăng nhập
            </button>
        </div>

        </form>
    </>
}

export default Login