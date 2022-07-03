import React, { useState } from 'react';
import { ProfileProps } from '@/pages/Profiles/profileData';

const TABS = ['Dashboard', 'Account & Profile', 'Activities', 'Tasks'];

const Profile: React.FC<ProfileProps> = ({ profileInfo }) => {
  const [selectedTab, setSelectedTab] = useState<string>(TABS[0]);
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) =>
    setSelectedTab(TABS[newValue]);
  return <></>;
};

export const ProfileOverview1: React.FC = () => {
  return <></>;
};
