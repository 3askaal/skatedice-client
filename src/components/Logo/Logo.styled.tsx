import { styled, rgba } from '3oilerplate'
import griptape from '../../assets/images/griptape.png'

export const SLogo = styled.div({})

export const SBoard = styled.div(({ theme }: any) => ({
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

export const SBoardLetters = styled.div(({ theme }: any) => ({
  alignItems: 'flex-end',
  marginTop: '-4px',
  fontFamily: 'board',
  fontSize: '2.8rem',
  textShadow: '0 2px 6px black',
}))

export const SBoardLettersItem = styled.span(
  ({ theme }: any) => ({
    color: 'primary',
    opacity: 0.125,
    transition: 'all .4s ease',
    paddingX: '0.5rem',
  }),
  {
    isActive: {
      opacity: 1,
    },
  },
)

export const SBoardLettersDot = styled.span(
  ({ theme }: any) => ({
    display: 'inline-block',
    textAlign: 'center',
    fontSize: '1.4rem',
    color: 'secondary',
    opacity: 0.125,
    transition: 'all .4s ease',
  }),
  {
    isActive: {
      opacity: 1,
    },
  },
)

// export const SBoardSubline = styled.div({
//   display: 'flex',
//   justifyContent: 'center',
//   // fontSize: '.8em',
//   padding: spacings.m,
//   fontFamily: 'Niconne',
// })
