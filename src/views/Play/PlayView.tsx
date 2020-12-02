import React, { useContext, useEffect, useState } from 'react'
import {
  Wrapper,
  Container,
  Spacer,
  Button,
  ElementGroup,
  Box,
  Popup,
} from '3oilerplate'
import { filter } from 'lodash'

import { TricksPanel } from './TricksPanel'
import { ScoreboardPanel } from './ScoreboardPanel'
import { ScoreContext } from '../../context'

const PlayView = () => {
  const { players }: any = useContext(ScoreContext)
  const [activePanel, setActivePanel] = useState('tricks')
  const [gameOver, setGameOver] = useState(false)
  
  useEffect(() => {
    const playersLeft: number = filter(players, (player) => player.score < 5).length

    if (playersLeft === 1) {
      setGameOver(true)
    }
  }, [players])

  return (
    <Wrapper s={{ overflow: 'hidden', padding: 'l' }}>
      <Container
        s={{
          display: 'flex',
          overflow: 'hidden',
        }}
      >
        <Spacer size="l" s={{ flexGrow: 1, overflow: 'hidden' }}>
          <ElementGroup style={{ width: '100%' }}>
            <Button
              isBlock
              isOutline={activePanel !== 'tricks'}
              onClick={() => setActivePanel('tricks')}
            >
              Tricks
            </Button>
            <Button
              isBlock
              isOutline={activePanel !== 'scoreboard'}
              onClick={() => setActivePanel('scoreboard')}
            >
              Scoreboard
            </Button>
          </ElementGroup>

          <Box
            s={{
              display: 'flex',
              flexGrow: 1,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            {activePanel === 'tricks' ? <TricksPanel /> : null}
            {activePanel === 'scoreboard' ? <ScoreboardPanel /> : null}
          </Box>

          { gameOver ? (
            <Popup header='Game Over' onClose={() => setGameOver(false)}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam facilis sequi veritatis voluptatum mollitia iure, nobis laboriosam. Sequi ratione repellat hic perspiciatis maiores explicabo, eius accusantium, voluptatibus, eum quidem animi.</p>
            </Popup>
          ) : null }
        </Spacer>
      </Container>
    </Wrapper>
  )
}

export default PlayView
