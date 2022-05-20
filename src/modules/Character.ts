import { Game } from './Game'
import { EventDead, EventInjured } from './Event'
import { Card } from './Card'

interface StatusConfig {
    name: string;
}
export class Status {
    name: string
    constructor ({ name }: StatusConfig) {
        this.name = name
    }
}

interface CharacterConfig {
    game: Game;
    name: string;
    isPlayer?: boolean;
    HP?: number;
    cardPool?: Card[];
}

export class Character {
    game: Game
    name: string
    isPlayer: boolean
    HP: number
    status: Set<Status> = new Set()
    cardPool: Card[] = [] // 卡组底部是索引的开始
    cardHand: Card[] = [] // 手牌左边是索引的开始

    constructor ({
        game,
        name = '',
        isPlayer = false,
        HP = 10,
        cardPool = []
    }: CharacterConfig) {
        this.game = game
        this.name = name
        this.isPlayer = isPlayer
        this.HP = HP
        this.cardPool = cardPool
    }

    // 受伤
    // 伤害数值，可能之后还需要伤害的属性之类的
    injured = (number: number, fromCharacter:Character, toCharacter:Character) => {
        this.HP -= number
        this.game.pushEvent(new EventInjured(this, fromCharacter, toCharacter))
        if (this.HP <= 0) {
            this.HP = 0
            this.game.pushEvent(new EventDead(this))
        }
    }

    addHeal = (number: number) => {
        this.HP += number
    }

    getCardHand = () => this.cardHand
    // 抽卡
    drawCard = (number = 2) => {
        this.cardHandAdd(number)
    }

    setCardPool = (cardPool: Card[]) => {
        this.cardPool = cardPool
    }

    private cardHandAdd = (number: number) => {
        for (let i = 0; i < number; i++) {
            const card = this.cardPool.pop()
            if (card) {
                this.cardHand.push(card)
            }
        }
    }
}
