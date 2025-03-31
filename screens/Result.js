import {View, FlatList} from 'react-native'
import ProfileHeader from '../components/ProfileHeader';
import Styles from '../utils/AppStyles';
import {useEffect, useState} from "react";
import Api from '../utils/Api';
import NotificationCard from "../components/NotificationCard";

export default function ({navigation}) {
    const [isLoading, setIsLoading] = useState(true);
    const [notifications, setNotifications] = useState([]);

    async function fetchData() {
        Api.get('results').then((data) => {
            const keyList = Object.keys(data).sort();
            const notificationList = keyList.map((key) => ({
                title: `${data[key].session} - ${data[key].quarter}`,
                body: data[key].result
            }))
            setNotifications(notificationList);
            setIsLoading(false);
        })
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (<>
        <ProfileHeader/>
        <View style={Styles.innerApp}>
            <FlatList
                data={notifications}
                renderItem={(props) => <NotificationCard {...props} onPress={navigation.push} navTitle={"Result details"}/>}
                refreshing={isLoading}
                onRefresh={fetchData}

            />
        </View>
    </>)
}