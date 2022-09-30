import { useState } from "react"
import styles from "../styles/sponsor.module.css"

type SponsorMeProps = {
}


function SponsorMe(props: SponsorMeProps) {

    return (
        <div className={styles.container}>
            <div className={styles.retangle}></div>
            <img src="./vite.jpg"/>
            <img src="./vite.jpg"/>
            <img src="./vite.jpg"/>
            <img src="./vite.jpg"/>
        </div>
    )
}


export { SponsorMe }