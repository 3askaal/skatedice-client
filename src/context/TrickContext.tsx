import React, { createContext, useState, useEffect } from 'react'
import Axios from 'axios'
import { filter, sample } from 'lodash'
import { API_URL } from '../constants'

export const TrickContext = createContext({})

export const TrickProvider = ({ children }: any) => {
  const [tricks, setTricks] = useState<any>([])
  const [availableTricks, setAvailableTricks] = useState<any>([])
  const [previousTricks, setPreviousTricks] = useState<any>([])
  const [settings, setSettings] = useState<any>({
    difficulty: 4,
  })

  async function fetchTricks() {
    const { data } = await Axios.get(`${API_URL}/tricks`)
    setTricks(data)
    setAvailableTricks(data)
  }

  useEffect(() => {
    fetchTricks()
  }, [])

  function getRandomTrick() {
    return sample(availableTricks)
  }

  function resetTricks() {
    setAvailableTricks(
      filter(tricks, (trick: any) => {
        return trick.difficulty <= settings.difficulty
      }),
    )
    setPreviousTricks([])
  }

  useEffect(() => {
    resetTricks()
  }, [settings])

  return (
    <TrickContext.Provider
      value={{
        settings,
        setSettings,
        tricks,
        setTricks,
        availableTricks,
        setAvailableTricks,
        previousTricks,
        setPreviousTricks,
        getRandomTrick,
        resetTricks,
      }}
    >
      {children}
    </TrickContext.Provider>
  )
}
