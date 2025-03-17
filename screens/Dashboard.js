import { View, FlatList } from "react-native";
import menuItems from '../data/dashboard-menu'
import DashboardMenuTile from "../components/DashboardMenuTile";
import ProfileHeader from "../components/ProfileHeader";


export default function Dashboard({ navigation }) {
    function renderMenuItem(itemData) {
        function pressHandler() {
            navigation.navigate(itemData.item.navigationTarget)
        }
        return (<DashboardMenuTile title={itemData.item.title} icon={itemData.item.icon} onPress={pressHandler} />)
    }
    return (
        <View>
            <ProfileHeader />
            <FlatList numColumns={3} data={menuItems} keyExtractor={item => item.id} renderItem={renderMenuItem} />
        </View>
    )
}