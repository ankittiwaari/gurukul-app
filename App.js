import { useState } from "react";
import { View, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
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
import styles, { colors } from './utils/AppStyles';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={function (props) {
        return (
          
            <DrawerContentScrollView {...props} style={{ backgroundColor: colors.extra1 }}>
              <View style={{alignItems:'center', marginBottom:30, overflow:'hidden'}}><Image style={{height:200, width:200, borderRadius:100}} source={require('./assets/student.jpg')}/></View>
              <DrawerItemList {...props} />
            </DrawerContentScrollView>
          
        )
      }}
      screenOptions={{
        headerStyle: { backgroundColor: colors.extra1 },
        headerTintColor: '#fff',
        drawerContentStyle: { backgroundColor: colors.extra1 },
        drawerInactiveTintColor: colors.tertiary,
        drawerActiveTintColor: colors.extra1,
        drawerActiveBackgroundColor: colors.tertiary,
      }}
    >
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
}

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
      <StatusBar style="light" />
      <View style={wrapperStyle}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={
            {
              headerStyle: {
                backgroundColor: colors.extra1
              },
              headerTintColor: '#fff',

            }
          }>
            <Stack.Screen name="NavigationDrawer" component={DrawerNavigator} options={{ headerShown: false }} />
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
