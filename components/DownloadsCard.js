import {StyleSheet, Text, View, Linking, Pressable, Alert} from "react-native";
import {useCallback} from "react";
import {colors} from '../utils/AppStyles';

export default function NotificationCard({item}) {
    const handleNavigation = useCallback(async (item) => {
        const supported = await Linking.canOpenURL(item.url);
        if (supported) {
            await Linking.openURL(item.url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${item.url}`);
        }
    }, [])

    return (
        <Pressable onPress={handleNavigation.bind(this, item)}>
            <View style={textStyles.contentWrap}>
                <View style={textStyles.notificationWrap}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <View><Text style={textStyles.lebel}>{item.title}</Text></View>
                    </View>
                </View>
            </View>
        </Pressable>
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
        fontSize: 18,
        textTransform: 'capitalize'
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