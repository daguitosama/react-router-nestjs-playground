import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
    index('routes/home.tsx'),
    route('/studio', 'routes/studio/route.tsx')
] satisfies RouteConfig;
