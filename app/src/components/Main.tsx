import { useState } from "react"
import styles from "../styles/main.module.scss"


type MainProps = {
}


function Main(props: MainProps) {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h1>Hello, World!</h1>
                <h2>Let's bora!</h2>
            </div>
        </div>
    )
}


export { Main }