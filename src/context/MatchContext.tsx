import React, { createContext, useState, useEffect } from 'react'
import { Match, Player } from '../types'

export const ScoreContext = createContext({})

export const ScoreProvider = ({ children }: any) => {
  const [activeMatch, setActiveMatch] = useState<Match | null>()
  const [match, setMatch] = useState<Match | null>()
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0)
  const [currentPlayer, setCurrentPlayer] = useState<Player>(0)

  useEffect(() => {
    const storedActiveMatch = localStorage.getItem('active:match')
    setActiveMatch(storedActiveMatch ? JSON.parse(storedActiveMatch) : null)
  }, [])

  useEffect(() => {
    setCurrentPlayer((match as Match).players[currentPlayerIndex])
  }, [currentPlayerIndex])

  const startMatch = (newMatch: Match) => {
    setMatch(newMatch)
  }

  const nextPlayer = () => {
    if (currentPlayerIndex < (match as Match).players.length - 1) {
      setCurrentPlayerIndex(currentPlayerIndex + 1)
    } else {
      setCurrentPlayerIndex(0)
    }
  }

  const previousPlayer = () => {
    if (currentPlayerIndex > 0) {
      setCurrentPlayerIndex(currentPlayerIndex - 1)
    } else {
      setCurrentPlayerIndex((match as Match).players?.length - 1)
    }
  }

  return (
    <ScoreContext.Provider
      value={{
        activeMatch,
        startMatch,
        currentPlayer,
        nextPlayer,
        previousPlayer
      }}
    >
      {children}
    </ScoreContext.Provider>
  )
}
