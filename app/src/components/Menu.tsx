import { useState } from "react"
import styles from "../styles/menu.module.scss"
import 'wmr'


type MenuProps = {
}


function Menu(props: MenuProps) {
    return (
        <div className={styles.menu}>
            <nav>
                <ul>
                    <li>LOGO</li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Portfólio</li>
                </ul>
            </nav>
            <div className={styles.web}>
                <ul>
                    <li>In</li>
                    <li>Fb</li>
                    <li>Yt</li>
                </ul>
            </div>
        </div>
    )
}


export { Menu }