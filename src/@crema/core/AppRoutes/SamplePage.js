import React from 'react';
import { RoutePermittedRole } from '../../constants/AppEnums';

const Page1 = React.lazy(() => import('../../../modules/sample/Page1'));
const Page2 = React.lazy(() => import('../../../modules/sample/Page2'));
const Dashboard = React.lazy(() => import('../../../modules/Page/Dashboard'));

export const samplePagesConfigs = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/sample/page-1',
    element: <Page1 />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/sample/page-2',
    element: <Page2 />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/Page/dashboard',
    element: <Dashboard />,
  },
];
