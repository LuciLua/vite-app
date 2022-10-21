import { useState } from "react"
import usePost from "../../hooks/usePost"
import { CardProps } from "../../types/global"
import style from "../../styles/container.module.css"
import Card from "./Cards"

type ContainerProps = {
    title: string,
    description: string
}

function Container(props: ContainerProps) {

    const { title, description } = props
    const [...post] = usePost()

    const [cards, setCards] = useState<CardProps[]>([
        ...post
    ])

    return (
        <div className={style.container}>
            <div className={style.header}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div className={style.containerCards}>
                {cards.map(card => {
                    return (
                        <Card
                            id={card.id}
                            key={card.id}
                            title={card.title}
                            subtitle={card.subtitle}
                            description={card.description}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Container