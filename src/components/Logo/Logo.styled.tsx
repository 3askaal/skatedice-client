import styled from 'styled-components'
import { fontSize } from 'styled-system'
import { rgba } from '3oilerplate'
import griptape from '../../assets/images/griptape.png'

export const SLogo = styled.div<any>({}, fontSize)

export const SBoard = styled.div(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  minHeight: '5rem',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '17rem',
  borderRadius: '40px',
  overflow: 'hidden',
  backgroundImage: `url(${griptape})`,
  backgroundSize: '50px 50px',
  backgroundColor: `rgba(0, 0, 0, 0.9)`,
  border: `solid ${rgba(theme.colors.primary, 0.6)}`,
  boxShadow: `0 5px 20px 10px ${rgba('black', 0.2)}`,
  borderWidth: '1px 2px',
}))

const SNoseAndTail: any = {
  display: 'inline-block',
  position: 'absolute',
  top: 0,
  bottom: 0,
  width: '50px',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  boxShadow: '0 0 10rem 5rem rgba(0, 0, 0, 0.3)',
}

export const SBoardNose = styled.div({
  ...SNoseAndTail,
  left: 0,
})

export const SBoardTail = styled.div({
  ...SNoseAndTail,
  right: 0,
})

export const SBoardLetters = styled.div(({ theme }) => ({
  marginTop: '-4px',
  fontFamily: theme.fonts.board,
  fontSize: '2.8rem',
  textShadow: '0 2px 6px black',
}))

export const SBoardLettersItem = styled.span(({ theme }) => ({
  color: theme.colors.primary,
}))

export const SBoardLettersDot = styled.span(({ theme }) => ({
  display: 'inline-block',
  textAlign: 'center',
  fontSize: '1.4rem',
  color: theme.colors.secondary,
  minWidth: '1.25rem',
}))

// export const SBoardSubline = styled.div({
//   display: 'flex',
//   justifyContent: 'center',
//   // fontSize: '.8em',
//   padding: spacings.m,
//   fontFamily: 'Niconne',
// })
