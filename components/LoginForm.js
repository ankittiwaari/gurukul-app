import {useState} from "react";
import {StatusBar} from "expo-status-bar";
import {useContext} from "react";
import {Text, View, TextInput, Button, Image, ActivityIndicator, Alert} from "react-native";
import styles, {colors} from "../utils/AppStyles";
import axios from "axios";
import {AuthContext} from "../store/auth-context";

function LoginFields({handleUserNameInput, handleUserPasswordInput, handleLogin}) {
    return (<>
        <View style={{alignItems: 'center'}}>
            <Image source={require("../assets/School_App_Logo_Round.png")}
                   style={{width: 128, height: 128, alignSelf: 'center'}}/>
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
                    <Button title="Login" onPress={handleLogin} android_ripple={{color: "#fff"}}
                            color={colors.primary}/>
                </View>
            </View>

        </View>
    </>)
}

function LoginForm() {
    const authCtx = useContext(AuthContext);
    let [userName, setUserName] = useState("");
    let [userPass, setUserPass] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleUserNameInput = (userInput) => {
        setUserName(userInput);
    };

    const handleUserPasswordInput = (userInput) => {
        setUserPass(userInput);
    };

    async function handleLogin() {
        setIsLoading(true);
        try {
            const authResponse = await axios.post(`${process.env.EXPO_PUBLIC_AUTH_URL}:signInWithPassword?key=${process.env.EXPO_PUBLIC_FIREBASE_KEY}`, {
                email: userName,
                password: userPass,
            })
            authCtx.authenticate(authResponse.data.idToken)
        } catch (e) {
            Alert.alert("Failed to login! Please check your credentials and try again!");
        }
        setIsLoading(false);
    };

    return (
        <>
            <StatusBar style="auto"/>
            {!isLoading &&
                <LoginFields
                    handleUserNameInput={handleUserNameInput}
                    handleUserPasswordInput={handleUserPasswordInput}
                    handleLogin={handleLogin}
                />
            }
            {isLoading && <ActivityIndicator size="large"/>}
        </>
    );
}

export default LoginForm;
