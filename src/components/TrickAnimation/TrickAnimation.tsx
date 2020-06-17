import React, { useContext, useState, useEffect } from 'react'
import { sample } from 'lodash'
import { TrickContext } from '../../context'
import { Trick } from '..'

export const TrickAnimation = ({ trick = {} }: any) => {
  const { tricks }: any = useContext(TrickContext)
  const [animatingTrick, setAnimatingTrick]: any = useState(null)
  const [animatingTrickInterval, setAnimatingTrickInterval]: any = useState(
    null,
  )
  const [loading, setLoading]: any = useState(true)

  useEffect(() => {
    if (trick) {
      setLoading(true)

      setTimeout(() => {
        setLoading(false)
        setAnimatingTrick(null)
      }, 1000)
    }
  }, [trick])

  useEffect(() => {
    function updateAnimatingTrick() {
      setAnimatingTrick(sample(tricks))
    }

    if (loading) {
      if (!animatingTrickInterval) {
        setAnimatingTrickInterval(setInterval(updateAnimatingTrick, 50))
      }
    } else {
      clearInterval(animatingTrickInterval)
      setAnimatingTrickInterval(null)
    }
  }, [tricks, loading, animatingTrickInterval])

  return <Trick interactive trick={animatingTrick || trick} />
}
