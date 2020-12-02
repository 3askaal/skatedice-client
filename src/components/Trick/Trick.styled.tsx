import { styled, rgba } from '3oilerplate'

export const STrick = styled.div({
  display: 'inline-flex',
  fontSize: '.9em',
})

export const STrickPart = styled.div(({ theme, interactive }: any) => ({
  display: 'flex',

  ...(interactive && {
    backgroundColor: rgba(theme.colors.grey90, 0.25),
    padding: theme.space.s,
    borderRadius: theme.radii.m,
  }),

  '+ *': {
    marginLeft: theme.space.xxs,
  },
}))
