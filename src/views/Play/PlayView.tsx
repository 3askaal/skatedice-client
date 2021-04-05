import React, { useState, useEffect, useContext } from 'react'
import {
  Wrapper,
  Container,
  Spacer,
  Button,
  Select,
  Row,
  Col,
  Title,
  List,
  ListItem,
  Box,
  Link,
  Body,
} from '3oilerplate'
import { pull, takeRight } from 'lodash'

import { TrickAnimation, Trick } from '../../components'
import { DIFFICULTY_OPTIONS } from '../../constants'
import { TrickContext } from '../../context'

const PlayView = () => {
  const {
    settings,
    setSettings,
    availableTricks,
    setAvailableTricks,
    previousTricks,
    setPreviousTricks,
    getRandomTrick,
    resetTricks,
  }: any = useContext(TrickContext)
  const [currentTrick, setCurrentTrick] = useState()
  const [showAllPrevious, setShowAllPrevious] = useState(false)

  function onNextClick() {
    if (currentTrick) {
      setPreviousTricks([...previousTricks, currentTrick])
      setAvailableTricks(pull(availableTricks, currentTrick))
    }

    if (availableTricks.length) {
      const randomTrick = getRandomTrick()
      setCurrentTrick(randomTrick)
    }
  }

  function onRestart() {
    resetTricks()
  }

  function onSelectChange(value: any) {
    setCurrentTrick(undefined)
    setSettings({ difficulty: value })
  }

  useEffect(() => {
    if (availableTricks.length) {
      setCurrentTrick(getRandomTrick())
    }
  }, [settings, availableTricks])

  return (
    <Wrapper style={{ overflow: 'hidden', padding: 'l' }}>
      <Container
        style={{
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Spacer size="m" style={{ flexGrow: 1, overflow: 'hidden' }}>
          <Select
            block
            options={DIFFICULTY_OPTIONS}
            value={settings.difficulty}
            onChange={onSelectChange}
          />

          {previousTricks.length ? (
            <Spacer size="s" style={{ overflow: 'hidden' }}>
              <Row style={{ justifyContent: 'space-between', flexWrap: 'nowrap' }}>
                <Col style={{ flexGrow: 0 }}>
                  <Title level={5}>Previous tricks:</Title>
                </Col>
                <Col style={{ flexGrow: 0 }}>
                  {previousTricks.length > 3 ? (
                    <Link s={{ cursor: 'pointer' }} onClick={() => setShowAllPrevious(!showAllPrevious)}>
                      {showAllPrevious ? 'Show Latest' : 'Show All'}
                    </Link>
                  ) : null}
                </Col>
              </Row>
              <List
                style={{
                  flexGrow: 1,
                  overflow: showAllPrevious ? 'scroll' : null,
                }}
              >
                {(showAllPrevious
                  ? previousTricks
                  : takeRight(previousTricks, 3)
                ).map((previousTrick: any) => (
                  <ListItem>
                    <Trick trick={previousTrick} />
                  </ListItem>
                ))}
              </List>
            </Spacer>
          ) : null}
        </Spacer>
        <Box
          style={{
            display: 'flex',
            paddingTop: 'xl',
            paddingBottom: 'xl',
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 10,
          }}
        >
          {availableTricks && availableTricks.length ? (
            <TrickAnimation trick={currentTrick} />
          ) : (
            <Body>
              <p>
                Out of tricks. Re-start game or try another difficulty level.
              </p>
            </Body>
          )}
        </Box>

        <Button
          isBlock
          onClick={
            availableTricks && availableTricks.length ? onNextClick : onRestart
          }
        >
          {availableTricks && availableTricks.length
            ? 'Next Trick'
            : 'Reset Tricks'}
        </Button>
      </Container>
    </Wrapper>
  )
}

export default PlayView
