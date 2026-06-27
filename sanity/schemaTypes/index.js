import { service } from './service'
import { stat } from './stat'
import { subscriber } from './subscriber'

export const schema = {
  types: [service, stat, subscriber],
}