import React, { useContext } from 'react'
import { Container, Wrapper, Spacer } from '3oilerplate'
import { MatchContext } from '../../context'

const ReportView = () => {
  const { players }: any = useContext(MatchContext)

  return (
    <Wrapper s={{ padding: 'l' }}>
      <Container>
        <Spacer size="s">
          {players.map((player: any) => (
            <div>{player.name}</div>
          ))}
        </Spacer>
      </Container>
    </Wrapper>
  )
}

export default ReportView
