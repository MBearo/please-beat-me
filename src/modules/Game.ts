import { Card, CardType } from './Card'
import { Player, PlayerType } from './Player'

export class Game {
    players: Player[] = []

    init = () => {
        console.log('Game init')
        const player1 = new Player({
            type: PlayerType.HUMAN
        })
        const player2 = new Player({
            type: PlayerType.COMPUTER
        })

        player1.addCard(new Card({ type: CardType.ATTACK, number: 1 }))
        player1.addCard(new Card({ type: CardType.HEAL, number: 2 }))

        player2.addCard(new Card({ type: CardType.ATTACK, number: 2 }))
        player2.addCard(new Card({ type: CardType.HEAL, number: 1 }))
        this.players.push(player1, player2)
    }

    getPlayers = () => this.players
}
