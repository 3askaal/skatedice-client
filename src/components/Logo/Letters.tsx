import React from 'react'
import {
  SBoardLetters,
  SBoardLettersItem,
  SBoardLettersDot,
} from './Logo.styled'

export const Letters = ({ word = 'skate', amount = 5, onLetterClick }: any) => {
  return (
    <SBoardLetters s={{ fontSize: onLetterClick && '3rem' }}>
      {word.split('').map((letter: string, index: number) => (
        <>
          <SBoardLettersItem
            s={{ cursor: onLetterClick && 'pointer' }}
            isActive={index < amount}
            onClick={onLetterClick ? () => onLetterClick(index + 1) : null}
            key={`${index.toString()}${letter}`}
          >
            {letter}
          </SBoardLettersItem>
          {index !== word.length - 1 && (
            <SBoardLettersDot
              s={{ cursor: onLetterClick && 'pointer' }}
              isActive={index < amount}
              key={`${index.toString()}.`}
            >
              .
            </SBoardLettersDot>
          )}
        </>
      ))}
    </SBoardLetters>
  )
}
