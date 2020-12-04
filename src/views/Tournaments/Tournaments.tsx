import React, { useContext } from 'react'
import { Container, Wrapper, Spacer, ListItem } from '3oilerplate'
import { TournamentContext } from '../../context'

const TournamentsView = () => {
  const { tournaments }: any = useContext(TournamentContext)

  return (
    <Wrapper>
      <Container s={{ alignItems: 'center', justifyContent: 'center' }}>
        <Spacer size="l" s={{ alignItems: 'center' }}>
          {tournaments.map((tournament: any) => (
            <ListItem>
              { tournament.name }
            </ListItem>
          ))}
        </Spacer>
      </Container>
    </Wrapper>
  )
}

export default TournamentsView
