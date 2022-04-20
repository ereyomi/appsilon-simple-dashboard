export type menuT = {
  id: number;
  iconName: string;
  label: string;
};

export const sideBarMenus: menuT[] = [
  {
    id: 1,
    iconName: 'overview',
    label: 'Overview',
  },
  {
    id: 2,
    iconName: 'policy',
    label: 'Policy',
  },
  {
    id: 3,
    iconName: 'reports',
    label: 'Reports',
  },
  {
    id: 4,
    iconName: 'company',
    label: 'Company',
  },
  {
    id: 5,
    iconName: 'user-account',
    label: 'User account',
  },
  {
    id: 6,
    iconName: 'history',
    label: 'History',
  },
];
