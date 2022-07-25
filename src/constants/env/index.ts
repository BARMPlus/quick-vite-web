import { getEnv } from '@dian/app-utils'

import local from './local'
import dev from './dev'
import pre from './pre'
import real from './real'
import stable from './stable'

import type { IEnvProps } from './type'

const env = getEnv()

const envMap = {
  local,
  dev,
  pre,
  real,
  stable,
}

export { envMap, env }

const currentEnv: IEnvProps = envMap[env]

export default currentEnv
