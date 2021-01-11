import React, { useState, useEffect, useContext } from 'react'
import { Spacer, Button, Input, Text, ElementGroup } from '3oilerplate'
import { pullAt, some } from 'lodash'
import { X as XIcon, Plus as PlusIcon } from 'react-feather'
import { NewMatchContext } from '../../context'

export const PlayersPanel = () => {
  const { players, setPlayers }: any = useContext(NewMatchContext)
  const [currentPlayerName, setCurrentPlayerName] = useState<string>('')
  const [error, setError] = useState<string | null>(null)

  const onAddLocalPlayer = () => {
    if (players.length < 8) {
      if (currentPlayerName) {
        if (!some(players, { name: currentPlayerName })) {
          setPlayers([...players, { name: currentPlayerName }])
          setCurrentPlayerName('')
        } else {
          setError('User added already')
          setCurrentPlayerName('')
        }
      } else {
        setError("User field can't be empty")
      }
    } else {
      setError("Can't add more then 8 players")
      setCurrentPlayerName('')
    }
  }

  const onSubmit = (event: any) => {
    event.preventDefault()
    onAddLocalPlayer()
  }

  const onRemoveLocalPlayer = (index: number) => {
    const newLocalPlayers = [...players]
    pullAt(newLocalPlayers, [index])
    setPlayers(newLocalPlayers)
  }

  const onUpdateLocalPlayer = (value: string, index: number) => {
    if (value === '') {
      onRemoveLocalPlayer(index)
    } else {
      const newLocalPlayers = [...players]
      newLocalPlayers[index].name = value
      setPlayers(newLocalPlayers)
    }
  }

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null)
      }, 2000)
    }
  }, [error, currentPlayerName])

  return (
    <Spacer size="s">
      <Spacer size="xs">
        <form onSubmit={onSubmit}>
          <Spacer>
            <ElementGroup>
              <Input
                placeholder="Keith"
                s={{ flexGrow: 1 }}
                value={currentPlayerName}
                isNegative={error}
                onChange={(value: any) => setCurrentPlayerName(value)}
              />
              <Button type="submit">
                <PlusIcon />
              </Button>
            </ElementGroup>
          </Spacer>
        </form>
        <Text size="s" s={{ color: 'negative' }}>
          {error}
        </Text>
      </Spacer>
      {players.map((player: any, index: number) => (
        <Spacer
          key={index.toString()}
          gutter="s"
          s={{ justifyContent: 'center', flexWrap: 'nowrap' }}
        >
          <ElementGroup>
            <Input
              s={{ flexGrow: 1 }}
              value={player.name}
              onChange={(value: string) => onUpdateLocalPlayer(value, index)}
            />
            <Button onClick={() => onRemoveLocalPlayer(index)}>
              <XIcon />
            </Button>
          </ElementGroup>
        </Spacer>
      ))}
    </Spacer>
  )
}
