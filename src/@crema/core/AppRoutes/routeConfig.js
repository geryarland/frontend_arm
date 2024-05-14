import React from 'react';
import { BiAlignLeft } from 'react-icons/bi';

const routesConfig = [
  {
    id: 'app',
    title: 'Coofis',
    messageId: 'sidebar.sample',
    type: 'group',
    children: [
      {
        id: 'page',
        title: 'Page',
        messageId: 'Coofis',
        type: 'item',
        icon: <BiAlignLeft />,
        url: '/coofis',
      },
      // {
      //   id: 'page-2',
      //   title: 'Page 2',
      //   messageId: 'sidebar.sample.page2',
      //   type: 'item',
      //   icon: <BiAlignLeft />,
      //   url: '/sample/page-2',
      // },
      // {
      //   id: 'dashboard',
      //   title: 'Dashboard',
      //   messageId: 'sidebar.sample.Dashboard',
      //   type: 'item',
      //   icon: <BiAlignLeft />,
      //   url: '/Page/Dashboard',
      // },
    ],
  },
];
export default routesConfig;
