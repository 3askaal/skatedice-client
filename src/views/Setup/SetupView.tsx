import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Wrapper, Spacer, Button, ElementGroup } from '3oilerplate'
import { TrickContext, ScoreContext } from '../../context'
import { SettingsPanel } from './SettingsPanel'
import { PlayersPanel } from './PlayersPanel'

const SetupView = () => {
  const history = useHistory()
  const { resetTricks }: any = useContext(TrickContext)
  const { startMatch }: any = useContext(ScoreContext)
  const [activePanel, setActivePanel] = useState('settings')

  function onStart() {
    resetTricks()
    startMatch()
    history.push('/play')
  }

  return (
    <Wrapper s={{ padding: 'l' }}>
      <Container s={{ alignItems: 'center' }}>
        <Spacer size="m" s={{ flexGrow: 1 }}>
          <ElementGroup style={{ width: '100%' }}>
            <Button
              isBlock
              isOutline={activePanel !== 'settings'}
              onClick={() => setActivePanel('settings')}
            >
              Settings
            </Button>
            <Button
              isBlock
              isOutline={activePanel !== 'players'}
              onClick={() => setActivePanel('players')}
            >
              Players
            </Button>
          </ElementGroup>

          <Spacer size="s" s={{ flexGrow: 1, justifyContent: 'center' }}>
            {activePanel === 'settings' ? <SettingsPanel /> : null}
            {activePanel === 'players' ? <PlayersPanel /> : null}
          </Spacer>
        </Spacer>

        {/* <Spacer
          size="xl"
          s={{
            alignItems: 'center',
            flexGrow: '1',
            justifyContent: 'center',
            width: '100%',
          }}
        >
        </Spacer> */}

        <Button isBlock onClick={onStart}>
          Start
        </Button>
      </Container>
    </Wrapper>
  )
}

export default SetupView
