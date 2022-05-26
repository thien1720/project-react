import clsx from "clsx";
import { useFormik } from "formik"
import { useState } from "react";
import Popup from "../Popup";
import * as Yup from "yup"
import styles from "./address.module.css";

// <Formik>

// </Formik>
function Address() {
  const [popup, setPopup] = useState(false)
  const [name, setName] = useState("")

  // useEffect(() => {
  //   setTimeout(()=>{
  //     setPopup(!popup)
  //   }, 5000);
  // },[])

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      address: "",
      comment: "",
      domain: "",
      checkHome: "",
      payIng: ""
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Vui lòng nhập trường này.")
        .min(5, 'Nhập tối thiểu 5 kí tự.'),
      number: Yup.string()
        .required("Vui lòng nhập trường này.")
        .min(10, "Số điện thoại không hợp lệ."),
      email: Yup.string()
        .email('Email nhập vào không chính xác.').required('Vui lòng nhập email của bạn'),
      address: Yup.string()
        .required("Vui lòng nhập trường này.")
        .min(10, "Vui lòng nhập rõ địa chỉ hơn")
    }),
    onSubmit: (values, { resetForm }) => {
      setName(values.name)
      resetForm({ values: "" })
      console.log(popup)
      setTimeout(()=>{
        console.log(popup)
        setPopup(!popup)
      }, 3000);

      
    }
  })
  return (
    <>
      <div id="address-user">
        <div className={clsx(styles.headerShow)}>
          <h6>Thông tin khách hàng</h6>
        </div>

        {popup ? <Popup name={name} /> : undefined}

        <div className={clsx(styles.loginIteam)}>
          <form action="" className="form" onSubmit={formik.handleSubmit}>
            <div className="form-input-list ">
              <div className={clsx(styles.formEmail)}>
                <div className={clsx(styles.formGroup, styles.bothInput)}>
                  <label htmlFor="name" className={clsx(styles.formLabel)}>
                    Tên đầy đủ
                  </label>
                  <input
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Nhập tên đầy đủ"
                    className={clsx(styles.formControl, styles.formFullname)}
                  />
                  {formik.errors.name && formik.touched.name && (
                    <p className={clsx(styles.warning)}>{formik.errors.name}</p>)}
                </div>
                <div className={clsx(styles.formGroup)}>
                  <label htmlFor="phone" className={clsx(styles.formLabel)}>
                    Số điện thoại
                  </label>
                  <input
                    value={formik.values.number}
                    onChange={formik.handleChange}
                    name="number"
                    id="phone"
                    type="text"
                    placeholder="Nhập số điện thoại của bạn"
                    className={clsx(styles.formControl, styles.formNumber)}
                  />
                  {formik.errors.number && formik.touched.number && (
                    <p className={clsx(styles.warning)}>{formik.errors.number}</p>)}
                </div>
              </div>
              <div className="com">
                <div className={clsx(styles.formGroup, styles.emails)}>
                  <label htmlFor="email" className={clsx(styles.formLabel)}>
                    Email
                  </label>
                  <input
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Nhập Email của bạn"
                    className="form-email"
                  />
                  {formik.errors.email && formik.touched.email && (
                    <p className={clsx(styles.warning)}>{formik.errors.email}</p>)}
                </div>

                <div className={clsx(styles.formGroup, styles.emails)}>
                  <label htmlFor="address">Nhập địa chỉ nhận hàng</label>
                  <input
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    id="address"
                    name="address"
                    rows="9"
                    cols="10"
                    placeholder="Nhập địa chỉ của bạn"

                  ></input>
                  {formik.errors.address && formik.touched.address && (
                    <p className={clsx(styles.warning)}>{formik.errors.address}</p>)}
                </div>

                <div className={clsx(styles.formGroup, styles.emails)}>
                  <label htmlFor="note">Ghi chú về đơn hàng</label>
                  <textarea
                    value={formik.values.comment}
                    onChange={formik.handleChange}
                    id="note"
                    name="comment"
                    rows="9"
                    cols="80"
                    placeholder="Ghi chú thêm về đơn hàng "
                    className={clsx(styles.formText)}
                  ></textarea>

                </div>
              </div>
            </div>

            <div id="method-payer">
              <div className={clsx(styles.methodShip)}>
                <h6>Chọn phương thức nhận hàng:</h6>
                <div className={clsx(styles.methodOption)}>
                  <div className={clsx(styles.methodStyleOption)}>
                    <input type="radio"
                      name="checkHome"
                      id="giao"
                      value="tại nhà"
                      checked={formik.values.checkHome === 'tại nhà'}
                      onChange={formik.handleChange}
                    />
                    <label htmlFor="giao"> giao hàng tại nhà</label>
                  </div>
                  <div className={clsx(styles.methodStyleOption)}>

                    <input type="radio" name="checkHome" id="lấy"
                      value="cửa hàng"
                      checked={formik.values.checkHome === "cửa hàng"}
                      onChange={formik.handleChange}
                    />
                    <label htmlFor="lấy">lấy hàng tại cửa hàng</label>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.methodShip)}>
                <h6>Chọn hình thức thanh toán :</h6>
                <div className={clsx(styles.methodOption)}>
                  <div className={clsx(styles.methodStyleOption)}>
                    <input type="radio" name="payIng" id="momney"
                      value="Tiền mặt"
                      checked={formik.values.payIng === "Tiền mặt"}
                      onChange={formik.handleChange}
                    />
                    <label htmlFor="momney">Thanh toán tiền mặt.</label> <br />
                  </div>

                  <div className={clsx(styles.methodStyleOption)}>
                    <input type="radio" name="payIng" id="installment"
                      value="Trả góp"
                      checked={formik.values.payIng === "Trả góp"}
                      onChange={formik.handleChange}
                    />
                    <label htmlFor="installment">Thanh toán bằng trả góp(lãi xuất 0%).</label>
                    <br />
                  </div>

                  <div className={clsx(styles.methodStyleOption)}>
                    <input type="radio" name="payIng" id="onPayment"
                      value="Thanh toán online"
                      checked={formik.values.payIng === "Thanh toán online"}
                      onChange={formik.handleChange}
                    />
                    <label htmlFor="onPayment">Thanh toán ngân hàng (VNpay,card,momo).</label>
                    <br />
                  </div>


                </div>
              </div>
            </div>

            <div className={clsx(styles.subMidForm)}>
              <button>Hoàn tất thanh toán</button>
            </div>
          </form>
        </div>
      </div>


    </>
  );
}
export default Address;