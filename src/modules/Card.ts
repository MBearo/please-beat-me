import { Action, ActionAttack, ActionList } from './Action'
import { Character } from './Character'
let cardId = 0
interface CardConfig {
    name: string
    actions: Action[]
}
export class Card {
    id = cardId++
    name: string
    actionList: Action[] = []
    constructor ({ name, actions }: CardConfig) {
        this.name = name
        actions.forEach(action => {
            this.actionList.push(action)
        })
    }

    action = () => {
        this.actionList.forEach(action => {
            action.action()
        })
    }
}

export const cardConfigAttackHand = (fromCharacter:Character, toCharacter:Character) => ({
    name: '脑瓜崩',
    actions: [new ActionAttack({ number: 2, fromCharacter, toCharacter })]
})
export const cardConfigAttackHandDouble = (fromCharacter:Character, toCharacter:Character) => ({
    name: '两指脑瓜崩',
    actions: [
        new ActionAttack({ number: 2, fromCharacter, toCharacter }),
        new ActionAttack({ number: 1, fromCharacter, toCharacter })
    ]
})
