import React, { createContext, useEffect, useState } from 'react'
import { Tournament } from '../types'

export const TournamentContext = createContext({})

export const TournamentProvider = ({ children }: any) => {
  const [activeTournament, setActiveTournament] = useState<Tournament | null>()
  const [tournament, setTournament] = useState<Tournament | null>()

  useEffect(() => {
    const storedActiveTournament = localStorage.getItem('active:match')
    setActiveTournament(storedActiveTournament ? JSON.parse(storedActiveTournament) : null)
  }, [])

  return (
    <TournamentContext.Provider
      value={{
        activeTournament,
        tournament,
      }}
    >
      {children}
    </TournamentContext.Provider>
  )
}
