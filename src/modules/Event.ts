import { Character } from './Character'

export class Event {
    name: string
    constructor (name: string) {
        this.name = name
    }
}

class EventListItem {
    id: number
    event: Event
    constructor (id: number, event: Event) {
        this.id = id
        this.event = event
    }
}
export class EventList {
    list: EventListItem[] = []
    nextId = 0
    index = 0
    maxLength = 100
    push = (event: Event) => {
        if (this.index >= this.maxLength) {
            this.list.shift()
            this.index = 0
        }
        const eventItem = new EventListItem(this.nextId, event)
        console.log('Event', eventItem)
        this.list.push(eventItem)
        this.index++
        this.nextId++
        return this.list
    }

    shift = () => {
        return this.list.shift()
    }
}
export class EventDead extends Event {
    character: Character
    constructor (character: Character) {
        super('dead')
        this.character = character
    }
}
export class EventInjured extends Event {
    toCharacter: Character
    fromCharacter: Character
    constructor (fromCharacter: Character, toCharacter:Character) {
        super('injured')
        this.toCharacter = toCharacter
        this.fromCharacter = fromCharacter
    }
}
