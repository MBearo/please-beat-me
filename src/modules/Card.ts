import { Player } from './Player'

export enum CardType{
    ATTACK= 'ATTACK',
    HEAL= 'HEAL',
}
interface CardConfig{
    type: CardType,
    number: number,
}
export class Card {
    type: CardType
    number: number
    constructor ({ type, number }: CardConfig) {
        this.type = type
        this.number = number
    }

    useTo = (player: Player) => {
        switch (this.type) {
        case CardType.ATTACK:
            player.getAttack(this.number)
            break
        case CardType.HEAL:
            player.getHeal(this.number)
            break
        }
    }
}
