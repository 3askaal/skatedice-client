import React, { useContext } from 'react'
import { Body } from '3oilerplate'
import { TrickContext } from '../../context'
import { TrickAnimation } from '../../components'

export const TrickSection = ({ currentTrick }: any) => {
  const { availableTricks }: any = useContext(TrickContext)

  return (
    <>
      {availableTricks && availableTricks.length ? (
        <TrickAnimation trick={currentTrick} />
      ) : (
        <Body>
          <p>Out of tricks. Re-start game or try another difficulty level.</p>
        </Body>
      )}
    </>
  )
}
