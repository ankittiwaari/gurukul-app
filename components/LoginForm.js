import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, Button, Image } from "react-native";
import styles, { colors } from "../utils/AppStyles";
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from '../store/redux/loggedIn';
function LoginForm({ loginState, setLoginState }) {
  let [userName, setUserName] = useState("");
  let [userPass, setUserPass] = useState("");

  const handleUserNameInput = (userInput) => {
    setUserName(userInput);
  };

  const handleUserPasswordInput = (userInput) => {
    setUserPass(userInput);
  };

  const handleLogin = () => {
    setLoginState(true)
    dispatch(authenticate({ loggedIn: true }));
  };
  const dispatch = useDispatch();
  let authenticated = useSelector((state) => {
    return state.authenticate.loggedIn;    
  })
  return (
    <View style={{ alignItems: 'center'}}>
      <Image source={require("../assets/School_App_Logo_Round.png")} style={{ width: 128, height: 128, alignSelf: 'center' }} />
      <Text style={styles.headingText}>Welcome to your school!</Text>
      <View style={styles.loginContainer}>
        <TextInput
          style={styles.loginInput}
          onChangeText={handleUserNameInput}
          placeholder="Email"
        />
        <TextInput
          style={styles.loginInput}
          onChangeText={handleUserPasswordInput}
          secureTextEntry={true}
          placeholder="Password"
        />
        <View style={styles.buttonWrap}>
          <Button title="Login" onPress={handleLogin} android_ripple={{ color: "#fff" }} color={colors.primary} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
export default LoginForm;
