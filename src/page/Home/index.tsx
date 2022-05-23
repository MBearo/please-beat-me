/* eslint-disable react/jsx-key */
import { Game } from '@/modules/Game'
import { Avatar, Button, Card as CardCom, List } from 'antd'
import React from 'react'
interface HomeProps {
    game: Game
    update?: number
}
export default function Home ({ game, update }: HomeProps) {
    const characters = game.getCharacters()
    const eventList = game.getEventList()
    console.log('eventList', eventList)
    const go = (card) => {
        card.action()
    }
    return (
        <div className='flex'>
            <div>
                {
                    characters.map(character => (
                        <>
                            <Avatar
                                key={character.name}
                                size={64}
                            >{character.name}</Avatar>
                            <span>
                            HP:{character.HP}
                            </span>
                            <div className='flex'>
                                {
                                    character.getCardHand().map(card => (
                                        <CardCom
                                            key={card.id}
                                            title={card.name}
                                            actions={[
                                                <Button type='primary' onClick={() => go(card)}>走你</Button>
                                            ]}
                                        >
                                            {card.actionList.map(action => (
                                                <div>{action.number}</div>
                                            ))}
                                        </CardCom>
                                    ))
                                }
                            </div>

                        </>
                    ))
                }
            </div>

            <List dataSource={eventList} renderItem={item => <List.Item>{item.id}:{item.event.name}</List.Item>}></List>
        </div>
    )
}
