import React, { createContext, useState } from 'react'
import { shuffle } from 'lodash'
import { Match, Player } from '../types'

export const NewMatchContext = createContext({})

export const NewMatchProvider = ({ children }: any) => {
  const [players, setPlayers] = useState<string[]>(['Keith', 'Eric', 'Ishod', 'Wade'])
  const [word, setWord] = useState<string>('')

  const createMatch = () => {
    const shuffledPlayers: Player[] = shuffle(players.map((player: any) => ({ player, letters: 0})))

    const tournament: Match = {
      players: shuffledPlayers,
      word,
      turns: [],
      current: shuffledPlayers[0],
    }

    localStorage.setItem('active:tournament', JSON.stringify(tournament))
  }

  return (
    <NewMatchContext.Provider
      value={{
        players,
        setPlayers,
        word,
        setWord,
        createMatch,
      }}
    >
      {children}
    </NewMatchContext.Provider>
  )
}
