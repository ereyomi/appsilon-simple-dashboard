export type menuT = {
  id: number;
  iconName: string;
  label: string;
  isActive: boolean;
};

export const sideBarMenus: menuT[] = [
  {
    id: 1,
    iconName: 'overview',
    label: 'Overview',
    isActive: false,
  },
  {
    id: 2,
    iconName: 'policy',
    label: 'Policy',
    isActive: false,
  },
  {
    id: 3,
    iconName: 'reports',
    label: 'Reports',
    isActive: true,
  },
  {
    id: 4,
    iconName: 'company',
    label: 'Company',
    isActive: false,
  },
  {
    id: 5,
    iconName: 'user-account',
    label: 'User account',
    isActive: false,
  },
  {
    id: 6,
    iconName: 'history',
    label: 'History',
    isActive: false,
  },
];
