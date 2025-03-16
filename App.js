import { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import LoginForm from "./components/LoginForm";
import Dashboard from "./screens/Dashboard";
import styles from './utils/AppStyles';
export default function App() {
  let [loginState, setLoginState] = useState(false);
  let screen = (
    <LoginForm loginState={loginState} setLoginState={setLoginState} />
  );
  if (loginState) {
    screen = <Dashboard />;
  }
  return (    
    <View  style={styles.container}>
      <StatusBar/>
      <SafeAreaView>{screen}</SafeAreaView>
    </View>        
  );
}
