import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: LinksScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'md-person'} />
  )
};

const LinksStack = createStackNavigator({
  Links: HomeScreen
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Take Quiz!',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'md-clipboard'} />
  )
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'md-settings'} />
  )
};

export default createBottomTabNavigator({
  LinksStack,
  HomeStack,

  SettingsStack
});
