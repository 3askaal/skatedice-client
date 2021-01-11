import React, { createContext, useState, useEffect } from 'react'
import { Match, Player } from '../types'

export const MatchContext = createContext({})

export const MatchProvider = ({ children }: any) => {
  const [activeMatch, setActiveMatch] = useState<Match | null>()
  const [match, setMatch] = useState<Match | null>()
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0)
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

  useEffect(() => {
    const storedActiveMatch = localStorage.getItem('active:match')
    setActiveMatch(storedActiveMatch ? JSON.parse(storedActiveMatch) : null)
  }, [])

  useEffect(() => {
    if (match) {
      setCurrentPlayer(match!.players[currentPlayerIndex])
    }
  }, [currentPlayerIndex, match])

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
    <MatchContext.Provider
      value={{
        activeMatch,
        startMatch,
        currentPlayer,
        nextPlayer,
        previousPlayer
      }}
    >
      {children}
    </MatchContext.Provider>
  )
}
