enum Page {
    Home = 'Home',
    NotFound = 'NotFound',
}

export const Pages = {
    [Page.Home]: {
        path: '/'
    },
    [Page.NotFound]: {
        title: 'Похоже, мы не можем найти нужную вам страницу',
        path: '/not-found'
    }
}