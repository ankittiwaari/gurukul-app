import { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginForm from "./components/LoginForm";
import Dashboard from "./screens/Dashboard";
import MyProfile from "./screens/MyProfile";
import Remarks from "./screens/Remarks";
import Downloads from "./screens/Downloads";
import Attendance from "./screens/Attendance";
import Result from "./screens/Result";
import Fee from "./screens/Fee";
import Communication from "./screens/Communication";
import ClassBroadcast from "./screens/ClassBroadcast";
import Homework from "./screens/Homework";
import PayOnline from "./screens/PayOnline";
import ApplyLeave from "./screens/ApplyLeave";
import Notifications from "./screens/Notifications";
import styles from './utils/AppStyles';

const Stack = createNativeStackNavigator();

export default function App() {
  let [loginState, setLoginState] = useState(false);
  let wrapperStyle = styles.container
  let screen = (

    <LoginForm loginState={loginState} setLoginState={setLoginState} />
  );
  if (loginState) {
    wrapperStyle = styles.innerApp    
  }
  return (
    <>
      <StatusBar style="auto" />
      <View style={wrapperStyle}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="MyProfile" component={MyProfile} />
            <Stack.Screen name="Remarks" component={Remarks} />
            <Stack.Screen name="Result" component={Result} />
            <Stack.Screen name="Downloads" component={Downloads} />
            <Stack.Screen name="Attendance" component={Attendance} />
            <Stack.Screen name="Fee" component={Fee} />
            <Stack.Screen name="Communication" component={Communication} />
            <Stack.Screen name="ClassBroadcast" component={ClassBroadcast} />
            <Stack.Screen name="Homework" component={Homework} />
            <Stack.Screen name="PayOnline" component={PayOnline} />
            <Stack.Screen name="ApplyLeave" component={ApplyLeave} />
            <Stack.Screen name="Notifications" component={Notifications} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}
