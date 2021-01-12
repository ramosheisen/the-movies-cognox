import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { TextInput } from "react-native";
import { NavigationActions } from 'react-navigation';
import styles from './style';

const Login = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const viewHome = () => {
      props.navigation.dispatch(
          NavigationActions.navigate({
              routeName: 'Movie'
          })
      );
  };

  const viewRegister = () => {
      props.navigation.dispatch(
          NavigationActions.navigate({
              routeName: 'Register'
          })
      );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>The movies</Text>
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
        <Text style={{color: "#fff"}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { viewRegister(); }}>
        <Text style={styles.loginText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
