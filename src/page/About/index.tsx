import { Card, CardType } from '@/modules/Card'
import { Button } from 'antd'
import { clone } from 'lodash'
import React, { useState } from 'react'

export default function About () {
    const [card, setCard] = useState(new Card({ type: CardType.ATTACK, number: 1 }))
    const add = () => {
        const c = clone(card)
        c.number++
        setCard(c)
    }
    return (
        <div>
            {card.number}
            <Button onClick={add}>add</Button>
        </div>
    )
}
