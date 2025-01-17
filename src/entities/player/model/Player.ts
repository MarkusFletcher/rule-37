import { getRandomInt } from '../../../shared/utils'
import type { IPlayerConfig } from './types'

export class Player {
  name
  number
  maxNumber
  attempts
  finish

  constructor(config: IPlayerConfig) {
    this.name = config.name ?? 'Игрок'
    this.number = config.startNumber ?? 0
    this.maxNumber = config.maxNumber ?? 10
    this.attempts = config.attempts ?? 10
    this.finish = false
  }

  roll(maxNumber?: number) {
    this.number = getRandomInt(maxNumber ?? this.maxNumber)
    this.attempts--
  }

  finishRolling() {
    this.finish = true
  }
}
