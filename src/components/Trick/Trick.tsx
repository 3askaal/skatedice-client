import React from 'react'
import { startCase } from 'lodash'
import { keyGen } from '3oilerplate'
import { STrick, STrickPart } from './Trick.styled'
import { POSITION_NAMES } from '../../constants'

export const Trick = ({ trick = {}, block, interactive }: any) => {
  const trickCopy = { ...trick }

  // console.log(trickCopy)
  if (trickCopy.position)
    trickCopy.position = startCase(POSITION_NAMES[trickCopy.position])
  if (trickCopy.direction)
    trickCopy.direction = trickCopy.direction.toUpperCase()
  if (trickCopy.rotation) trickCopy.rotation = trickCopy.rotation.toString()
  if (trickCopy.essential)
    trickCopy.essential = startCase(trickCopy.essential.name)

  if (trick.aka && trick.aka.placement && trick.aka.name) {
    trickCopy[trick.aka.placement] = startCase(trick.aka.name)
  }

  const trickParts: string[] = [
    trickCopy.position,
    trickCopy.direction,
    trickCopy.rotation,
    trickCopy.essential,
  ].filter(Boolean)

  return (
    <STrick s={{ display: block ? 'flex' : 'inline-flex' }}>
      {trickParts.map((trickPart: any) => (
        <STrickPart key={keyGen()} interactive={interactive}>
          {trickPart}
        </STrickPart>
      ))}
    </STrick>
  )
}
