import React, { useContext } from 'react'
import { Container, Wrapper, Spacer, ListItem } from '3oilerplate'
import { MatchContext } from '../../context'

const MatchesView = () => {
  const { matches }: any = useContext(MatchContext)

  return (
    <Wrapper>
      <Container s={{ alignItems: 'center', justifyContent: 'center' }}>
        <Spacer size="l" s={{ alignItems: 'center' }}>
          {matches.map((match: any) => (
            <ListItem>
              { match.name }
            </ListItem>
          ))}
        </Spacer>
      </Container>
    </Wrapper>
  )
}

export default MatchesView
