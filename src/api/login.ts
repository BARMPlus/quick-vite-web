import { ProjectApi } from '@/utils/axios.restful'

export function getTestApi(params) {
  return ProjectApi.get('/test', { params })
}
