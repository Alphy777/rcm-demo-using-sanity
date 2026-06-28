import { service } from './service'
import { stat } from './stat'
import { subscriber } from './subscriber'
import { review } from './review'
import { aiservice } from './aiservice'

export const schema = {
  types: [service, stat, subscriber, review, aiservice],
}