import {StyleSheet, Text, View} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import {colors} from '../utils/AppStyles';

export default function NotificationCard({item}) {
    return (
        <>
            <View style={textStyles.contentWrap}>
                <View style={textStyles.notificationWrap}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <View><Text style={textStyles.lebel}>{item.title}</Text></View>
                        {/*<View><FontAwesome name="trash-o" style={textStyles.icon}/></View>*/}
                    </View>
                    <View>
                        <Text style={textStyles.contentStyles}>{item.body}</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

const textStyles = StyleSheet.create({
    lebel: {
        color: colors.primary,
        fontWeight: "bold",
        fontSize: 25,
    },
    contentStyles: {
        color: colors.extra1,
        fontSize: 18
    },
    contentWrap: {
        padding: 8,
        marginVertical: 4,
        elevation: 4,
        shadowOpacity: 0.1,
        shadowRadius: 1,
        backgroundColor: colors.tertiary
    },
    notificationWrap: {
        flex: 1
    },
    icon: {
        fontSize: 25,
        flex: 1,
        color: colors.extra1,
    }
})