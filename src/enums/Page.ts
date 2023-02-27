enum Page {
    Home = 'Home',
    Profile = 'Profile',
    NotFound = 'NotFound',
}

export const Pages = {
    [Page.Home]: {
        path: '/'
    },
    [Page.Profile]: {
        title: 'Профиль',
        path: '/profile'
    },
    [Page.NotFound]: {
        title: 'Похоже, мы не можем найти нужную вам страницу',
        path: '/not-found'
    }
}