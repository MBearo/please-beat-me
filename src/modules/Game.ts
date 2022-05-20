import { Card, cardConfigAttackHand, cardConfigAttackHandDouble } from './Card'
import { Character } from './Character'
import { EventList, Event } from './Event'
interface GameConfig {
    subEvent?: (event: Event) => void
}
export class Game {
    characters: Character[] = []
    player: Character
    robot: Character
    eventList = new EventList()
    subEvent?: (event: Event) => void

    constructor ({ subEvent }: GameConfig) {
        this.subEvent = subEvent
        const player = new Character({
            game: this,
            name: 'player',
            isPlayer: true
        })
        const robot = new Character({
            game: this,
            name: 'robot'
        })
        this.player = player
        this.robot = robot
        this.characters.push(player, robot)
        player.setCardPool([
            new Card(cardConfigAttackHand(player, robot)),
            new Card(cardConfigAttackHand(player, robot)),
            new Card(cardConfigAttackHand(player, robot)),
            new Card(cardConfigAttackHand(player, robot)),
            new Card(cardConfigAttackHand(player, robot))
        ])
        robot.setCardPool([
            new Card(cardConfigAttackHand(robot, player)),
            new Card(cardConfigAttackHandDouble(robot, player)),
            new Card(cardConfigAttackHandDouble(robot, player)),
            new Card(cardConfigAttackHandDouble(robot, player)),
            new Card(cardConfigAttackHandDouble(robot, player))
        ])

        this.characters.forEach(character => character.drawCard())
    }

    pushEvent = (event: Event) => {
        this.eventList.push(event)
        this.subEvent?.(event)
    }

    setSubEvent = (subEvent: (event: Event) => void) => {
        this.subEvent = subEvent
    }

    getCharacters = () => this.characters
    getEventList = () => this.eventList.list
}
