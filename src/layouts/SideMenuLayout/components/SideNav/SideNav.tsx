import React, { useState } from 'react';
import { IMenuItem } from '@/config/menu/menu.config';
import { useNavigate } from 'react-router-dom';

export const getBgColorByLevel = (level: number): string => {
  if (level >= 3) {
    return 'primary.800';
  }
  if (level === 2) {
    return 'primary.600';
  }
  return 'background.default';
};

interface MenuItemProps {
  mini?: boolean;
  item: IMenuItem;
  level?: number;
}

const MenuItem: React.FC<MenuItemProps> = ({
  mini = false,
  item,
  level = 1
}): JSX.Element => {
  if (level <= 0) {
    level = 1;
  }
  const navigate = useNavigate();
  const [open, setOpen] = useState(item.isOpen);
  const handleClick = () => {
    if (item.routerLink) {
      navigate(item.routerLink);
    } else {
      item.isOpen = !item.isOpen;
      setOpen(!open);
    }
  };
  const hasNestedMenu = item.nesterItems && item.nesterItems.length > 0;
  return <></>;
};

interface MenuProps {
  mini?: boolean;
  menuItems?: IMenuItem[];
  level?: number;
}

const Menu: React.FC<MenuProps> = ({
  mini = false,
  menuItems = [],
  level = 1
}) => {
  if (level <= 0) {
    level = 1;
  }
  return <></>;
};

export interface SideNavProps {
  mini?: boolean;
  menuItems?: IMenuItem[];
}

export const SideNav: React.FC<SideNavProps> = ({
  mini = false,
  menuItems = []
}): JSX.Element => {
  const width = mini ? 85 : 250;
  return <></>;
};
