import { Card } from './Card'

export enum PlayerType {
    HUMAN = 'HUMAN',
    COMPUTER = 'COMPUTER'
}
interface PlayerConfig {
    type: PlayerType,
    HP?: number,
}
export class Player {
    type: PlayerType
    HP: number
    isAlive = true
    cards: Set<Card> = new Set()

    constructor ({ type, HP = 100 }: PlayerConfig) {
        this.type = type
        this.HP = HP
    }

    getAttack = (damage:number) => {
        this.subtractHP(damage)
    }

    getHeal = (heal:number) => {
        this.addHP(heal)
    }

    addHP (heal: number) {
        this.HP += heal
    }

    subtractHP (damage: number) {
        this.HP -= damage
        if (this.HP <= 0) {
            this.isAlive = false
        }
    }

    addCard (card: Card) {
        this.cards.add(card)
    }

    removeCard (card: Card) {
        this.cards.delete(card)
    }
}
