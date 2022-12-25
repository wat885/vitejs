import { RouteObject } from 'react-router-dom';
import DHome from '../pages/dashboard/d-home';
import DLayout from '../pages/dashboard/d-layout';
import DRoom from '../pages/dashboard/d-room';

const routeDashboard: RouteObject[] = [
  {
    path: '/dashboard',
    element: <DLayout />,
    children: [
      {
        path: '', //localhost:4000/dashboard
        element: <DHome />,
      },
      {
        path: 'room', //localhost:4000/dashboard/room
        element: <DRoom />,
      },
    ],
  },
];

export default routeDashboard;
