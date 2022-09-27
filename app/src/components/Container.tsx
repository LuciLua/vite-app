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

        let counter = 0
        let oldId = cards[cards.length - 1].id
        oldId != undefined ? counter = oldId + 1 : counter

        setCards([...cards,
        {
            id: counter,
            title: `Card ${counter}`,
            description: `Description here! Lorem Ipsum lorem ipsum lorem ipsum! This is lorem ipsum example number ${counter}`
        }])

    }

    const { title, description } = props

    const [cards, setCards] = useState<CardProps[]>([
        {
            id: 0,
            title: "Card 0",
            description: "Description here! Lorem Ipsum lorem ipsum lorem ipsum! This is lorem ipsum example"
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
                <button title="Add" onClick={clickOnButton} />
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