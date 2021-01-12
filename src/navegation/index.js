import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import HomeMovie from '../container/Home/Home';
import HomeMovieDetail from '../container/Home/HomeDetails';

import SideMenu from './sidemenu/SideMenu';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';

const navOptionHandler = (navigation) => ({
	headerShown: false
});

const LoginStack = createStackNavigator({
	Login: {
		screen: Login,
		navigationOptions: navOptionHandler
	},
	Register: {
		screen: Register,
		navigationOptions: navOptionHandler
	}
});

const MovieStack = createStackNavigator({
	Movie: {
		screen: HomeMovie,
		navigationOptions: navOptionHandler
	},
	MovieDetails: {
		screen: HomeMovieDetail,
		navigationOptions: navOptionHandler
	}
});

const MainStack = createStackNavigator(
	{
		Login: {
			screen: LoginStack,
			navigationOptions: navOptionHandler
		},
		Home: {
			screen: MovieStack,
			navigationOptions: navOptionHandler
		}
	},{ initialRouteName: 'Login' }
);

const appDrawer = createDrawerNavigator(
	{
		drawer: MainStack
	},
	{
		contentComponent: SideMenu,
		drawerWidth: Dimensions.get('window').width * 3 / 5,
		drawerType: 'slide'
	}
);

const app = createSwitchNavigator(
	{
		app: appDrawer
	},
	{
		initialRouteName: 'app'
	}
);

export default class App extends Component {
	render() {
		const AppNavigator = createAppContainer(app);
		return <AppNavigator />;
	}
}
