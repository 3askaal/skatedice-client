import React, { createContext, useState } from 'react'
import { shuffle } from 'lodash'
import { Match, Player } from '../types'

export const ScoreContext = createContext({})

export const ScoreProvider = ({ children }: any) => {
  const [players, setPlayers] = useState<string[]>(['Keith', 'Eric', 'Ishod', 'Wade'])
  const [word, setWord] = useState<string>('')

  const createMatch = () => {
    const shuffledPlayers: Player[] = shuffle(players.map((player: string) => ({ name: player, score: 0})))

    const match: Match = {
      players: shuffledPlayers,
      word,
      turns: [],
      current: shuffledPlayers[0],
    }

    localStorage.setItem('active:match', JSON.stringify(match))
  }

  return (
    <ScoreContext.Provider
      value={{
        players,
        setPlayers,
        word,
        setWord,
        createMatch,
      }}
    >
      {children}
    </ScoreContext.Provider>
  )
}
