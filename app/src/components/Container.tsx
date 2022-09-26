import { useState } from "react"
import styles from "../styles/container.module.scss"

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
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div className={styles.containerCards}>
                {cards.map(card => {
                    return (
                        <Card key={card.id} title={card.title} description={card.description} />
                    )
                })}
            </div>
            <div className={styles.containerButton}>
                <button onClick={clickOnButton} />
            </div>
        </div>
    )
}

function Card(props: CardProps) {
    const { title, description } = props
    return (
        <div className={styles.card}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export { Container, Card }