import { Player } from '../../player'

export interface IGameConfig {
  players: Player[]
  maxNumber: number
}

export interface ITakeTurnOptions {
  playerIndex?: number
  type?: 'roll' | 'stop'
}
