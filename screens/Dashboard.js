import { View, Text } from "react-native";
import Styles from '../utils/AppStyles'

export default function Dashboard(){
    return(
        <View style={Styles.container}>
            <Text style={Styles.headingText}>Dashboard</Text>
        </View>
    )
}