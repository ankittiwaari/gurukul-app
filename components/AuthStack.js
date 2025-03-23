import {View} from "react-native";
import styles from "../utils/AppStyles";
import LoginForm from "./LoginForm";

export default function AuthStack(){
    return (<View style={styles.container}><LoginForm /></View>)
}