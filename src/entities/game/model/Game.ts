import type { Player } from '../../player'
import type { IGameConfig, ITakeTurnOptions } from './types'

export class Game {
  players: Player[]
  currentPlayerIndex: number
  maxNumber: number

  constructor(config: IGameConfig) {
    this.players = Array.from(config.players)
    this.currentPlayerIndex = 0
    this.maxNumber = config.maxNumber ?? 10000
  }

  get currentPlayer() {
    return this.players[this.currentPlayerIndex]
  }

  takeTurn({ playerIndex, type = 'roll' }: ITakeTurnOptions) {
    if (Number(playerIndex) >= 0 && playerIndex !== this.currentPlayerIndex)
      return

    const player = this.currentPlayer

    if (player.attempts > 0 && !player.finish) {
      if (type === 'roll') {
        player.roll(this.maxNumber)
      }

      if (player.attempts <= 0 || type === 'stop') {
        player.finishRolling()
      }

      this.setNextPlayer()
    }
  }

  setNextPlayer() {
    if (!this.isEndGame) {
      const initialIndex = this.currentPlayerIndex
      do {
        this.currentPlayerIndex =
          (this.currentPlayerIndex + 1) % this.players.length
      } while (
        this.players[this.currentPlayerIndex].finish &&
        this.currentPlayerIndex !== initialIndex
      )
    }
  }

  get isEndGame() {
    return this.players.every(player => player.finish)
  }

  get winner() {
    if (!this.isEndGame) return null
    const maxNumber = Math.max(...this.players.map(player => player.number))
    const winners = this.players.filter(player => player.number === maxNumber)
    return winners.length > 1 ? 'Ничья' : winners[0].name
  }
}
