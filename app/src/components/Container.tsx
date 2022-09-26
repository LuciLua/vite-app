import { useState } from "react"
import style from "../styles/container.module.css"

type ContainerProps = {
    title: string,
    description: string
}

type CardProps = {
    id?: number,
    title: string,
    description: string
}


function Container(props: ContainerProps) {


    function clickOnButton() {

        let oldId = cards[cards.length - 1].id
        let counter = 0
        oldId != undefined ? counter = oldId + 1 : counter

        setCards([...cards,
        {
            id: counter,
            title: `Card ${counter}`,
            description: "Description two hahaha description two hahaha description two hahaha"
        }])

    }

    const { title, description } = props

    const [cards, setCards] = useState<CardProps[]>([
        {
            id: 0,
            title: "Card 0",
            description: "Description two hahaha description two hahaha description two hahaha"
        }
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
                        <Card key={card.id} title={card.title} description={card.description} />
                    )
                })}
            </div>
            <div className={style.containerButton}>
                <button onClick={clickOnButton} />
            </div>
        </div>
    )
}

function Card(props: CardProps) {
    const { title, description } = props
    return (
        <div className={style.card}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export { Container, Card }