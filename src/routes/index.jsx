import { Home, Game, LeaderBoard } from '../pages';

const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/game',
        element: <Game />
    },
    {
        path: '/leaderboard',
        element: <LeaderBoard />
    }
];

export default routes;
