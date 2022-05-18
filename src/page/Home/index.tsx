import React, { useEffect, useState } from 'react'
import { Game } from '@/modules/Game'
import { Player } from '@/modules/Player'
import { Card as CardCom } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { Card, CardType } from '@/modules/Card'
import { clone } from 'lodash'

const game = new Game()
game.init()
export default function Home () {
    const [players, setPlayers] = useState<Player[]>([])
    useEffect(() => {
        setPlayers(game.getPlayers())
    }, [])
    const reRender = () => {
        setPlayers(clone(game.getPlayers()))
    }
    // 这个逻辑应该在game里
    const action = (player:Player, card:Card) => {
        card.useTo(player)
        reRender()
    }
    return (
        <div>
            {
                players.map(player => (
                    <div key={player.type}>
                        <CardCom
                            title={player.type}
                        >
                            <div>HP:{player.HP}</div>
                        </CardCom>
                        <div className='flex'>
                            {
                                [...player.cards].map(card => (
                                    <CardCom
                                        key={card.type}
                                        title={card.type}
                                        actions={[
                                            <EditOutlined key="edit" onClick={() => action(player, card)}/>
                                        ]}
                                    >
                                        <div>number:{card.number}</div>
                                    </CardCom>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
