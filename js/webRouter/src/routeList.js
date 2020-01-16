export const ROUTELIST = [
    {
        path: '/',
        name: 'index',
        component: 'this is index page'
    },
    {
        path: '/hash',
        name: 'hash',
        component: 'This is hash page'
      },
      {
        path: '/history',
        name: 'history',
        component: 'This is history page'
      },
      {
        path: '*',
        name: 'notFound',
        component: '404 NOT FOUND'
      }
]