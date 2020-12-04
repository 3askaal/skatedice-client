import React, { useContext } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'
import {
  Spacer,
  Button,
  Text,
} from '3oilerplate'
import { MatchContext } from '../../context'

export const PlayerNav = () => {
  const { nextPlayer, previousPlayer, currentPlayer }: any = useContext(MatchContext)

  return (
    <Spacer size="l" s={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <Button onClick={() => previousPlayer()}>
        <ChevronLeft />
      </Button>
      <Text>{currentPlayer.name}</Text>
      <Button onClick={() => nextPlayer()}>
        <ChevronRight />
      </Button>
    </Spacer>
  )
}
