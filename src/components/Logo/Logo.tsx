import React from 'react'
import {
  SLogo,
  SBoard,
  SBoardNose,
  SBoardTail,
  SBoardLetters,
  SBoardLettersItem,
  SBoardLettersDot,
} from './Logo.styled'

export const Logo = () => {
  return (
    <SLogo>
      <SBoard>
        <SBoardNose />
        <SBoardTail />
        <SBoardLetters>
          <SBoardLettersItem>s</SBoardLettersItem>
          <SBoardLettersDot>.</SBoardLettersDot>
          <SBoardLettersItem>k</SBoardLettersItem>
          <SBoardLettersDot>.</SBoardLettersDot>
          <SBoardLettersItem>a</SBoardLettersItem>
          <SBoardLettersDot>.</SBoardLettersDot>
          <SBoardLettersItem>t</SBoardLettersItem>
          <SBoardLettersDot>.</SBoardLettersDot>
          <SBoardLettersItem>e</SBoardLettersItem>
        </SBoardLetters>
      </SBoard>
    </SLogo>
  )
}
