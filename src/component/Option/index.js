import { useState } from "react";
import clsx from "clsx"


import styles from "./option.module.css"

function Option({ options }) {
    const [type, setType] = useState("")
    const [color , setColor] = useState("")
    

    function optionCoin(otp) {
        return new Intl.NumberFormat('vi-VN',
            {
                style: 'currency', currency
                    : 'VND'
            }).format(otp);
    }

    return (
        options.map((option, index) => {
            return <div 
                className="option-grid col-6 mb-3 text-center"
                key={index}
            >
                <div
                    className={clsx(styles.styleOption , type=== option.gb ? styles.useSelect: "")}
                    onClick={() => setType(option.gb)}

                >
                    <p>{option.gb}</p>
                    <p className={clsx(styles.optionCoin)}>
                        {optionCoin(option.coin)}
                    </p>
                </div>
            </div>
        })
    )
}

export default Option