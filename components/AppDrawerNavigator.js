import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomSideBarMenu  from './CustomSidebarMenu';
import Screen2 from '../screens/MyAccount';
import Notification from '../screens/Notification';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : Screen2
    },

Notification : {
    screen : Notification
    },
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
