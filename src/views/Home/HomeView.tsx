import React, { useContext } from 'react'
import { Container, Wrapper, Spacer, Button } from '3oilerplate'
import { useHistory } from 'react-router-dom'
import { Logo } from '../../components'
import { TrickContext } from '../../context'

const HomeView = () => {
  const history = useHistory()
  const { tricks }: any = useContext(TrickContext)

  return (
    <Wrapper>
      <Container style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Spacer size="l" style={{ alignItems: 'center' }}>
          <Logo />
          <Spacer size="m" style={{ alignItems: 'center' }}>
            <Button onClick={() => history.push('/setup')}>Play Game</Button>
            {/* <Button onClick={() => history.push('/rules')}>Rules</Button> */}
            <Button onClick={() => history.push('/tricks')}>
              Available Tricks ({tricks.length})
            </Button>
          </Spacer>
        </Spacer>
      </Container>
    </Wrapper>
  )
}

export default HomeView
