import { Character } from './Character'
interface ActionConfig {
    number: number;
    fromCharacter?: Character;
    toCharacter?: Character
}
export abstract class Action {
    fromCharacter?: Character
    toCharacter?: Character
    number: number
    constructor ({
        number,
        fromCharacter,
        toCharacter
    }: ActionConfig) {
        this.number = number
        this.fromCharacter = fromCharacter
        this.toCharacter = toCharacter
    }

    setFromCharacter = (character: Character) => {
        this.fromCharacter = character
    }

    setToCharacter = (character: Character) => {
        this.toCharacter = character
    }

    abstract action(): void
}
export class ActionAttack extends Action {
    action () {
        this.toCharacter?.injured(this.number, this.fromCharacter, this.toCharacter)
    }
}
export class ActionHeal extends Action {
    action () {
        this.fromCharacter?.addHeal(this.number)
    }
}
// export class ActionList {
//     list: Action[] = []
//     push = (action: Action) => {
//         this.list.push(action)
//     }
// }
