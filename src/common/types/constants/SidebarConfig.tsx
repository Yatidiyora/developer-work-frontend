import { FaUserGear } from 'react-icons/fa6';
import { GrUserAdmin } from 'react-icons/gr';
import { MdAssignmentInd } from 'react-icons/md';
import { RiDashboardLine } from 'react-icons/ri';
import Roles from '../../../view/pages/admin-settings/roles/Roles';
import Users from '../../../view/pages/admin-settings/users/Users';
import CustomerCRM from '../../../view/pages/cstomer-crm/CustomerCRM';
import SalesRevenue from '../../../view/pages/sales-revenue/SalesRevenue';
import { SidebarConfig } from '../interface/Layouts.interface';

// Sidebar and Route Configuration
export const sidebarConfig: SidebarConfig[] = [
  {
    label: 'Customer CRM',
    path: '/customer-crm',
    component: () => <CustomerCRM />,
    icon: () => <RiDashboardLine size={24} />,
  },
  {
    label: 'Admin Settings',
    icon: () => <GrUserAdmin size={24} />,
    children: [
      {
        label: 'Users Management',
        path: '/manage-users',
        icon: () => <FaUserGear size={24} />,
        component: () => <Users />,
      },
      {
        label: 'Role Management',
        path: '/manage-roles',
        icon: () => <MdAssignmentInd size={24} />,
        component: () => <Roles />,
      },
    ],
  },
  {
    label: 'Sales Revenue',
    path: '/sales-revenue',
    component: () => <SalesRevenue />,
    icon: () => <RiDashboardLine size={24} />,
  },
];
