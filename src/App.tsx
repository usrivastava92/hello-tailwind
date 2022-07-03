import React from 'react';
import './App.scss';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { TopMenuLayout } from '@/layouts/TopMenuLayout';
import { SideMenuLayout } from '@/layouts/SideMenuLayout/SideMenuLayout';
import { Login } from '@/pages/Login';
import { PageNotFound } from '@/pages/404';
import { Buttons } from '@/pages/Buttons';
import { Tooltips } from '@/pages/Tooltip';
import { UserLayout1 } from '@/pages/Users/Layout1';
import { UserLayout2 } from '@/pages/Users/Layout2';
import { UserLayout3 } from '@/pages/Users/Layout3';
import { ProfileOverview1 } from '@/pages/Profiles/Overview1';
import { ProfileOverview2 } from '@/pages/Profiles/Overview2';
import { ProfileOverview3 } from '@/pages/Profiles/Overview3';
import { Alerts } from '@/pages/Alerts';
import { Chips } from '@/pages/Chips';
import { Forms } from '@/pages/Forms';

function App() {
  return <BrowserRouter>{getRoutes()}</BrowserRouter>;
}

function getRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/top" />}></Route>
      <Route path="/top" element={<TopMenuLayout />}>
        {getNestedRoutes()}
      </Route>
      <Route path="/side" element={<SideMenuLayout />}>
        {getNestedRoutes()}
      </Route>
      <Route path="/simple" element={<SideMenuLayout mini />}>
        {getNestedRoutes()}
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
}

function getNestedRoutes(): JSX.Element {
  return (
    <>
      <Route path="regularForm" element={<Forms />}></Route>
      <Route path="chips" element={<Chips />}></Route>
      <Route path="buttons" element={<Buttons />}></Route>
      <Route path="alerts" element={<Alerts />}></Route>
      <Route path="tooltips" element={<Tooltips />}></Route>
      <Route path="usersLayout1" element={<UserLayout1 />}></Route>
      <Route path="usersLayout2" element={<UserLayout2 />}></Route>
      <Route path="usersLayout3" element={<UserLayout3 />}></Route>
      <Route path="profileOverview1" element={<ProfileOverview1 />}></Route>
      <Route path="profileOverview2" element={<ProfileOverview2 />}></Route>
      <Route path="profileOverview3" element={<ProfileOverview3 />}></Route>
    </>
  );
}

export default App;
