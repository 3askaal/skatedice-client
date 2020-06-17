import React from 'react'
import { Container, Wrapper, Spacer, Body, Title } from '3oilerplate'

const RulesView = () => {
  return (
    <Wrapper style={{ padding: 'l' }}>
      <Container>
        <Spacer size="s">
          <Title>Rules</Title>
          <Body>
            <p>
              You can use this app in any way you want. But if you're new to
              this and you want to know some ways you can play a game with this
              app. Read the following suggestions.
            </p>

            <p>
              The easiest way to play this game is to make everybody try the
              trick that shows up on the screen. The players who don't land the
              trick get a letter.
            </p>

            <p>
              Another way to play this game is when a trick comes up. If
              somebody lands the trick, all the other players get one more
              chance to try the trick. If they miss, they get a letter. You can
              also decide that no one get's a letter if no one lands the trick
              that comes up at all.
            </p>
          </Body>
        </Spacer>
      </Container>
    </Wrapper>
  )
}

export default RulesView
