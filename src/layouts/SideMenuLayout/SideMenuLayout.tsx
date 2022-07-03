import { MENU_ITEMS } from '@/config/menu/menu.config';
import { SideNav } from '@/layouts/SideMenuLayout/components/SideNav';
import { TopBar } from '@/layouts/SideMenuLayout/components/TopBar/TopBar';
import { Outlet } from 'react-router-dom';
import React from 'react';

export interface SideMenuLayoutProps {
  mini?: boolean;
}

export const SideMenuLayout: React.FC<SideMenuLayoutProps> = ({
  mini = false
}) => {
  return <></>;
};
