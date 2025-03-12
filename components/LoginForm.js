import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, Button } from "react-native";
import styles from "../utils/AppStyles";

function LoginForm() {
  let [userName, setUserName] = useState("");
  let [userPass, setUserPass] = useState("");

  const handleUserNameInput = (userInput) => {
    setUserName(userInput);
  };

  const handleUserPasswordInput = (userInput) => {
    setUserPass(userInput);
  };

  const handleLogin = () => {
    alert(`Hello ${userName}`);
  };

  return (
    <View style={styles.container}>
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
          <Button title="Login" onPress={handleLogin} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
export default LoginForm;
