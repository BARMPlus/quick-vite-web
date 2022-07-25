import { init } from '@rematch/core'
import createImmerPlugin from '@rematch/immer'

import * as models from '@/models'

import middlewares from './middlewares'

const ImmerPlugin = createImmerPlugin()

const store = init({
  models,
  plugins: [ImmerPlugin],
  redux: {
    middlewares,
  },
})

export default store
