import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  // {
  //   name: 'Dashboard',
  //   url: '/dashboard',
  //   iconComponent: { name: 'cil-speedometer' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW'
  //   }
  // },
  {
    name: 'Deals',
    url: '/deals',
    iconComponent: { name: 'cil-handshake' }
  },
  {
    name: 'Projects',
    url: '/projects',
    iconComponent: { name: 'cil-code' }
  },
  {
    name: 'Meets',
    url: '/meets',
    iconComponent: { name: 'cil-monitor' }
  },
  {
    name: 'Calls',
    url: '/calls',
    iconComponent: { name: 'cil-mobile' }
  },
  {
    name: 'Profile',
    url: '/profile',
    iconComponent: { name: 'cil-user' }
  }
];
