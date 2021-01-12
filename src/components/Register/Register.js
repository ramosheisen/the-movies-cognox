import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { TextInput } from "react-native";
import { useDispatch } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { createUserAction } from "../../redux/actions/UserActions";
import styles from './style';

const Register = ({ navigation }) => {

    const dispatch = useDispatch();

    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = (user) => dispatch(createUserAction(user));

    const viewHome = () => {
        createUser({ user, email, password });
        
        navigation.dispatch(
            NavigationActions.navigate({
                routeName: 'Movie'
            })
        );
    };

    return (
        <View style={styles.container}>
        <Text style={styles.logo}>Register</Text>
        <View style={styles.inputView}>
            <TextInput 
            style={styles.inputText}
            placeholder="User..."
            placeholderTextColor="#fff"
            onChangeText={(text) => setUser(text)}
            />
        </View>
        <View style={styles.inputView}>
            <TextInput 
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#fff"
            onChangeText={(text) => setEmail(text)}
            />
        </View>
        <View style={styles.inputView}>
            <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#fff"
            onChangeText={(text) => setPassword(text)}
            />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={() => { viewHome(); }}>
            <Text style={{color: "#fff"}}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        </View>
    );
};

export default Register;
