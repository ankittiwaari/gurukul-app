import {StatusBar} from "expo-status-bar";
import {Image, View, Text, Alert, ActivityIndicator} from "react-native";
import styles, {colors} from "../utils/AppStyles";
import {NavigationContainer, useTheme} from "@react-navigation/native";
import MyProfile from "../screens/MyProfile";
import Remarks from "../screens/Remarks";
import Result from "../screens/Result";
import Downloads from "../screens/Downloads";
import Attendance from "../screens/Attendance";
import Fee from "../screens/Fee";
import Communication from "../screens/Communication";
import ClassBroadcast from "../screens/ClassBroadcast";
import Homework from "../screens/Homework";
import PayOnline from "../screens/PayOnline";
import ApplyLeave from "../screens/ApplyLeave";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from "@react-navigation/drawer";
import Dashboard from "../screens/Dashboard";
import Notifications from "../screens/Notifications";
import {FontAwesome} from "@expo/vector-icons";
import {AuthContext} from "../store/auth-context";
import ProfileContextProvider, {ProfileContext} from "../store/profile-context";
import {useContext, useEffect, useState} from "react";
import axios from "axios";


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    const authCtx = useContext(AuthContext);
    return (
        <Drawer.Navigator
            drawerContent={function (props) {
                const {colors: drawerColors} = useTheme();
                return (
                    <DrawerContentScrollView {...props} style={{backgroundColor: colors.extra1}}
                                             contentContainerStyle={{
                                                 justifyContent: "space-between", flex: 1
                                             }}><View>
                        <View style={{alignItems: 'center', marginBottom: 30, overflow: 'hidden'}}><Image
                            style={{height: 200, width: 200, borderRadius: 100}}
                            source={require('../assets/student.jpg')}/></View>
                        <DrawerItemList {...props} />
                    </View>
                        <DrawerItem
                            label={() => (
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <FontAwesome name="power-off" size={20} color={colors.tertiary}/>
                                    <Text style={{marginLeft: 8, color: colors.tertiary}}>Log out</Text>
                                </View>
                            )}
                            onPress={() => authCtx.logout()}
                            style={{
                                backgroundColor: colors.extra1
                            }}
                        />
                    </DrawerContentScrollView>
                )
            }}
            screenOptions={{
                headerStyle: {backgroundColor: colors.extra1},
                headerTintColor: '#fff',
                drawerContentStyle: {backgroundColor: colors.extra1},
                drawerInactiveTintColor: colors.tertiary,
                drawerActiveTintColor: colors.extra1,
                drawerActiveBackgroundColor: colors.tertiary,
            }}
        >
            <Drawer.Screen name="Dashboard" component={Dashboard}/>
            <Drawer.Screen name="Notifications" component={Notifications}/>
        </Drawer.Navigator>
    );
}

function InnerSection() {
    return <View style={styles.innerApp}>
        <NavigationContainer>
            <Stack.Navigator screenOptions={
                {
                    headerStyle: {
                        backgroundColor: colors.extra1
                    },
                    headerTintColor: '#fff',

                }
            }>
                <Stack.Screen name="NavigationDrawer" component={DrawerNavigator}
                              options={{headerShown: false}}/>
                <Stack.Screen name="MyProfile" component={MyProfile}/>
                <Stack.Screen name="Remarks" component={Remarks}/>
                <Stack.Screen name="Result" component={Result}/>
                <Stack.Screen name="Downloads" component={Downloads}/>
                <Stack.Screen name="Attendance" component={Attendance}/>
                <Stack.Screen name="Fee" component={Fee}/>
                <Stack.Screen name="Communication" component={Communication}/>
                <Stack.Screen name="ClassBroadcast" component={ClassBroadcast}/>
                <Stack.Screen name="Homework" component={Homework}/>
                <Stack.Screen name="PayOnline" component={PayOnline}/>
                <Stack.Screen name="ApplyLeave" component={ApplyLeave}/>
                <Stack.Screen name="Notifications" component={Notifications}/>
            </Stack.Navigator>
        </NavigationContainer>
    </View>
}

export default function AuthenticatedStack() {
    const [isLoading, setIsLoading] = useState(true);
    const [dataFetched, setDataFetched] = useState(false);
    const profileCtx = useContext(ProfileContext);
    useEffect(() => {
        if (dataFetched) {
            return;
        }

        async function fetchData() {
            try {
                const profileData = await axios.get(`${process.env.EXPO_PUBLIC_API_URL}/students.json`);
                const fetchedData = profileData.data[Object.keys(profileData.data)[0]];
                profileCtx.setProfileData(fetchedData);
                setIsLoading(false);
                setDataFetched(true);
            } catch (err) {
                Alert.alert("Error while setting up profile!");
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <StatusBar style="light"/>
            {!isLoading && <InnerSection/>}
            {isLoading && <View style={styles.container}><ActivityIndicator size="large"/></View>}
        </>
    )
}