export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    path: '/batch/detail/:id',
    name: '批次详情',
    icon: 'table',
    hideInMenu:true,
    component: './BatchDetail',
  },
  {
    name: '立案申请',
    icon: 'table',
    path: '/case',
    component: './Case',
    routes: [
      {
        path: '/case/add',
        name: '批量立案',
        icon: 'smile',
        component: './Case',
      },
    ],
  },
  {
    name: '立案审批',
    icon: 'table',
    path: '/review',
    component: './Review',
  },
  {
    name: '保全和送达',
    icon: 'table',
    path: '/secure',
    component: './secure',
  },
  {
    name: '审判',
    icon: 'table',
    path: '/trial',
    component: './Trial',
  },
  {
    name: '执行',
    icon: 'table',
    path: '/execution',
    component: './Execution',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
