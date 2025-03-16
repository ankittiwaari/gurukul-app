import { View, FlatList } from "react-native";
import menuItems from '../data/dashboard-menu'
import DashboardMenuTile from "../components/DashboardMenuTile";
import ProfileHeader from "../components/ProfileHeader";

function renderMenuItem(itemData) {
    return (<DashboardMenuTile title={itemData.item.title} icon={itemData.item.icon} />)
}
export default function Dashboard() {
    return (
        <View>
            <ProfileHeader/>
            <FlatList numColumns={3} data={menuItems} keyExtractor={item => item.id} renderItem={renderMenuItem} />
        </View>
    )
}