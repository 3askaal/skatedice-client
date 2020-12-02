import React, { useContext, useState, useEffect } from 'react'
import { Row, Col, Title, List, ListItem, Box, Link, Button } from '3oilerplate'
import { takeRight, initial, pull } from 'lodash'
import { Trick } from '../../components'
import { TrickContext } from '../../context'
import { TrickSection } from './TrickSection'

export const TricksPanel = () => {
  const {
    settings,
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
    }

    if (availableTricks.length) {
      const randomTrick = getRandomTrick()
      setCurrentTrick(randomTrick)
      setAvailableTricks(pull(availableTricks, randomTrick))
    }
  }

  function onRestart() {
    resetTricks()
  }

  useEffect(() => {
    if (availableTricks.length) {
      setCurrentTrick(getRandomTrick())
    }
  }, [settings, availableTricks])

  return (
    <>
      {previousTricks.length ? (
        <Box s={{ width: '100%' }}>
          <Row s={{ justifyContent: 'space-between' }}>
            <Col s={{ flexGrow: 0 }}>
              <Title level={5}>Previous tricks:</Title>
            </Col>
            <Col s={{ flexGrow: 0 }}>
              {previousTricks.length > 3 ? (
                <Link onClick={() => setShowAllPrevious(!showAllPrevious)}>
                  {showAllPrevious ? 'Show Latest' : 'Show All'}
                </Link>
              ) : null}
            </Col>
          </Row>
          <List
            s={{
              flexGrow: 1,
              overflow: showAllPrevious ? 'scroll' : null,
            }}
          >
            {(showAllPrevious
              ? initial(previousTricks)
              : takeRight(previousTricks, 3)
            ).map((previousTrick: any) => (
              <ListItem key={previousTrick._id}>
                <Trick trick={previousTrick} />
              </ListItem>
            ))}
          </List>
        </Box>
      ) : null}
      <Box
        s={{
          display: 'flex',
          paddingTop: 'xl',
          paddingBottom: 'xl',
          alignItems: 'center',
          justifyContent: 'center',
          flexGrow: 10,
        }}
      >
        <TrickSection currentTrick={currentTrick} />
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
    </>
  )
}
