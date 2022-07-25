export const publicRoutes = [
  {
    path: '/login',
    title: 'login',
    importer: () => import('@/pages/login'),
  },
]

export const privateRoutes = [
  {
    path: '/demo',
    title: 'demo',
    importer: () => import('@/pages/demo'),
  },
]

export const redirectRoutes = [
  {
    path: '*',
    title: 'no-match-redirect',
    importer: () => import('@/pages/redirect/no-match-redirect'),
  },
]
