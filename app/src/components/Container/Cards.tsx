import { CardProps } from "../../types/global"
import style from "../../styles/container.module.css"

function Card(props: CardProps) {
    const { title, subtitle, description, id } = props
    return (
        <div className={style.card} key={id}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Card