import React from 'react';
import { IMenuItem } from '@/config/menu/menu.config';
import './topNav.scss';
import { useNavigate } from 'react-router-dom';

interface MenuItemProps {
  item: IMenuItem;
  level?: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, level = 1 }) => {
  if (level <= 0) {
    level = 1;
  }
  const navigate = useNavigate();
  const hasNestedItems = item.nesterItems && item.nesterItems.length > 0;
  const handleClick = () => {
    if (item.routerLink) {
      navigate(item.routerLink);
    }
  };
  return <></>;
};

interface MenuProps {
  menuItems?: IMenuItem[];
  level?: number;
}

const Menu: React.FC<MenuProps> = ({ menuItems = [], level = 1 }) => {
  if (level <= 0) {
    level = 1;
  }
  return <></>;
};

export interface TopNavProps {
  menuItems?: IMenuItem[];
}

export const TopNav: React.FC<TopNavProps> = ({
  menuItems = []
}): JSX.Element => {
  return <></>;
};
