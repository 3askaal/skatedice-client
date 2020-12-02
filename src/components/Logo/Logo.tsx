import React from 'react'
import { SLogo, SBoard, SBoardNose, SBoardTail } from './Logo.styled'
import { Letters } from './Letters'

export const Logo = () => {
  return (
    <SLogo>
      <SBoard>
        <SBoardNose />
        <SBoardTail />
        <Letters />
      </SBoard>
    </SLogo>
  )
}
