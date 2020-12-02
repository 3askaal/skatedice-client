import React, { useContext } from 'react'
import { Button, List, ListItem, Text, Spacer } from '3oilerplate'
import { ScoreContext } from '../../context'
import { Letters } from '../../components/Logo/Letters'

export const ScoreboardPanel = () => {
  const { players, setPlayers }: any = useContext(ScoreContext)

  const onLetterClick = (playerIndex: number, newScore: number) => {
    const newPlayers = [...players]
    newPlayers[playerIndex].score = newScore
    setPlayers(newPlayers)
  }

  return (
    <Spacer s={{ overflow: 'hidden', flexGrow: 1 }}>
      <Spacer s={{ overflow: 'hidden', flexGrow: 1 }}>
        <List s={{ overflow: 'auto' }}>
          {players.map((player: any, index: number) => (
            <ListItem
              s={{
                alignItems: 'center',
                justifyContent: 'space-between',
                py: 'm',
              }}
              key={player.name}
            >
              <Text
                s={{ textDecoration: player.score === 5 && 'line-through' }}
              >
                {player.name}
              </Text>
              <span>
                <Letters
                  amount={player.score}
                  onLetterClick={(newScore: number) =>
                    onLetterClick(index, newScore)
                  }
                />
              </span>
            </ListItem>
          ))}
        </List>
        {/* <Text type="small" s={{ textAlign: 'right' }}>
          Click on the letters to change the score
        </Text> */}
      </Spacer>
      <Button>Next Trick</Button>
    </Spacer>
  )
}
