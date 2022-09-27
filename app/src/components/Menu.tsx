import { useState } from "react"
import styles from "../styles/menu.module.css"
import { FiFacebook, FiLinkedin, FiYoutube, FiCoffee } from 'react-icons/fi'

type MenuProps = {
}


function Menu(props: MenuProps) {
    return (
        <div className={styles.menu}>
            <nav>
                <ul>
                    <li>
                        <a title="Logo" href="/"><FiCoffee /></a>
                    </li>
                    <li>
                        <a title="Home" href="/">Home</a>
                    </li>
                    <li>
                        <a title="About" href="/">About</a>
                    </li>
                    <li>
                        <a title="Services" href="/">Services</a>
                    </li>
                    <li>
                        <a title="Portfólio" href="/">Portfólio</a>
                    </li>
                </ul>
            </nav>
            <div className={styles.web}>
                <ul>
                    <li>
                        <a title="Linkedin" href="https://www.linkedin.com/in/l%C3%BAcia-guelber-837a50185/">
                            <FiLinkedin />
                        </a>
                    </li>
                    <li>
                        <a title="Facebook" href="https://www.facebook.com/luci4dev">
                            <FiFacebook />
                        </a>
                    </li>
                    <li>
                        <a title="YouTube" href="https://www.youtube.com/channel/UCIbJuoAAdTP9rClO7mK-aVg">
                            <FiYoutube />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}


export { Menu }