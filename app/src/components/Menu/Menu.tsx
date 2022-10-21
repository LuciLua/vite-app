import styles from "./Menu.module.css"
import { FiFacebook, FiLinkedin, FiYoutube, FiCoffee } from 'react-icons/fi'
import Li from "./Items"

type MenuProps = {
}


function Menu(props: MenuProps) {

    function handleMenu(e:any) {
        e.preventDefault()
        const menu = document.querySelector(`.${styles.menu}`)
        
        menu?.classList.contains(styles.active) ? 
        menu?.classList.remove(styles.active) :
        menu?.classList.add(styles.active)

    }

    return (
        <div className={styles.menu}>
        {/* <div className={`${styles.menu} ${styles.active}`}> */}
            <div className={styles.content}>
                <nav>
                    <ul>
                        <Li className={styles.logo} onclick={handleMenu}>
                            <FiCoffee />
                        </Li>
                        <Li href="/">About</Li>
                        <Li href="/">Services</Li>
                        <Li href="/">Portfolio</Li>
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
        </div>
    )
}


export { Menu }