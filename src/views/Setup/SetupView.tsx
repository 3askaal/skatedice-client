import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { filter, sampleSize } from 'lodash'
import {
  Container,
  Wrapper,
  Spacer,
  Button,
  Select,
  Text,
  Box,
  Row,
  Col,
  keyGen,
} from '3oilerplate'
import { Logo, Trick } from '../../components'
import { TrickContext } from '../../context'
import { DIFFICULTY_OPTIONS } from '../../constants'

const SetupView = () => {
  const history = useHistory()
  const { tricks, settings, setSettings, resetTricks }: any = useContext(
    TrickContext,
  )
  const [expectedTricks, setExpectedTricks] = useState<any[]>([])

  useEffect(() => {
    if (tricks && settings && settings.difficulty) {
      setExpectedTricks(sampleSize(filter(tricks, settings), 3))
    }
  }, [tricks, settings])

  function onStart() {
    resetTricks()
    history.push('/play')
  }

  return (
    <Wrapper style={{ padding: 'l' }}>
      <Container style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Spacer
          size="xl"
          style={{
            alignItems: 'center',
            flexGrow: '1',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Logo />

          <Spacer size="m" style={{ width: '100%' }}>
            <Select
              block
              options={DIFFICULTY_OPTIONS}
              value={settings.difficulty}
              onChange={(value: number) => setSettings({ difficulty: value })}
            />
            {expectedTricks.length ? (
              <Box style={{ display: 'flex', flexDirection: 'column' }}>
                <Text type="small">Expect tricks like:</Text>
                {expectedTricks.map((expectedTrick: any) => (
                  <Text key={keyGen()} type="small">
                    {'- '}
                    <Trick trick={expectedTrick} />
                  </Text>
                ))}
              </Box>
            ) : null}
          </Spacer>

          {/* <CheckboxGroup options={SPECIAL_OPTIONS} /> */}
        </Spacer>

        <Button isBlock onClick={onStart}>
          Start
        </Button>
      </Container>
    </Wrapper>
  )
}

export default SetupView
