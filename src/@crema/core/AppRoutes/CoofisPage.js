import React from 'react';
import { RoutePermittedRole } from '../../constants/AppEnums';

const Page = React.lazy(() => import('../../../modules'));

export const coofisPagesConfigs = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/coofis',
    element: <Page />,
  },
];
