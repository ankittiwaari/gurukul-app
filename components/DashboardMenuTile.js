import { Pressable, Text, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from '../utils/AppStyles';

function DashboardMenuTile({ title, icon, onPress }) {
    return (
        <View style={styles.gridItem}>
            <Pressable style={styles.button} android_ripple={{ color: colors.secondary }} onPress={onPress}>
                <View style={styles.innerContainer}>
                    <FontAwesome name={icon} style={styles.iconStyles} />
                    <Text style={[styles.button, styles.title]}>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 0
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    button: {
        flex: 1
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        color: colors.primary        
    },
    iconStyles: {
        fontSize: 48,
        color: colors.primary
    }
});

export default DashboardMenuTile