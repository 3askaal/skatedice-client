import styled from 'styled-components'
import { flexGrow, justifyContent, display } from 'styled-system'

export const STrick = styled.div<any>(
  {
    display: 'inline-flex',
    fontSize: '.9em',
  },
  display,
)

export const STrickPart = styled.div<any>(
  ({ theme, interactive }) => ({
    display: 'flex',

    ...(interactive && {
      backgroundColor: theme.colors.grey50,
      padding: theme.space.s,
      borderRadius: theme.radii.m,
    }),

    '+ *': {
      marginLeft: theme.space.xxs,
    },
  }),
  flexGrow,
  justifyContent,
)
