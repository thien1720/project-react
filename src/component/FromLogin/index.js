import { useState , useContext ,useRef , useEffect } from "react"
import Login from "./Login.js"
import Registration from "./Registration.js"
import { Tabs, Tab } from 'react-bootstrap'
import { ThemContext } from "../Header/Header.js"

import clsx from "clsx"
import styles from "./login.module.css"

function FormLogin() {
    // const [option, setOption] = useState(false)
    const [key, setKey] = useState('Đăng nhập')
    let logins = useContext(ThemContext)

    function handlePrevent(e){
        // e.preventDefault()
        e.stopPropagation()
    
    }

    
    return <>
        <div 
            className={clsx(styles.useLogin , )}
            onClick={
                logins.toggleLogin 
            }

        >
            <div id="login" 
               
            >
                <div className={clsx(styles.boxLogin)}>
                    <div  onClick={handlePrevent}
                    >
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className={clsx(styles.showLogin)}
                    >
                        <hr style={
                            {
                                margin: "5px",
                                height: "2px",
                                borderWidth: 0,
                                backgroundColor: "black",
                            }
                        }

                        />
                        <Tab eventKey="Đăng nhập" title="Đăng nhập">
                            <Login />
                        </Tab>

                        <Tab eventKey="Đăng ký" title="Đăng ký">
                            <Registration />
                        </Tab>

                    </Tabs>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default FormLogin