import React from 'react';
import { Text, SafeAreaView, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';
import styles from './style';
import { NavigationActions } from 'react-navigation';

const Navbar = ({ isHome, title, navigation, image }) => {

	const viewLogin = () => {
		navigation.dispatch(
			NavigationActions.navigate({
				routeName: 'Login'
			})
		);
	};

	return (
		<View style={styles.container}>
			<LinearGradient start={[0.1, 0.1]} colors={[ '#3d98ff', '#fb5b5a', '#fb5b5a' ]} style={styles.navbar}>
				{isHome ? (
					<View>
						<View style={styles.buttonContainer}>
							<TouchableOpacity onPress={() => navigation.openDrawer()}>
								<Icon name="align-justify" type="font-awesome" color="#eefaff" />
							</TouchableOpacity>
							<TouchableOpacity onPress={() => { viewLogin(); }}>
								<Icon name="sign-out" type="font-awesome" color="#eefaff" />
							</TouchableOpacity>
						</View>
						<Text style={styles.title}>{title}</Text>
					</View>
				) : (
					<ImageBackground
						source={{ uri: `https://image.tmdb.org/t/p/w500/${image}` }}
						style={styles.imageContainer}
					>
						<View style={styles.buttonContainer}>
							<TouchableOpacity onPress={() => navigation.goBack()}>
								<Icon name="arrow-left" type="font-awesome" color="#eefaff" />
							</TouchableOpacity>
						</View>
						<Text style={styles.title}>{title}</Text>
					</ImageBackground>
				)}
			</LinearGradient>
		</View>
	);
};

export default Navbar;
