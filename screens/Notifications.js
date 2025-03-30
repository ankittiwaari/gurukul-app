import {View, FlatList, Text, ActivityIndicator} from 'react-native'
import ProfileHeader from '../components/ProfileHeader';
import Styles from '../utils/AppStyles';
import {useEffect, useState} from "react";
import Api from '../utils/Api';
import NotificationCard from "../components/NotificationCard";

export default function ({navigation}) {
    const [isLoading, setIsLoading] = useState(true);
    const [notifications, setNotifications] = useState([]);

    function fetchData() {
        Api.get('notifications').then((data) => {
            const keyList = Object.keys(data);
            const notificationList = keyList.map((key) => ({
                title: data[key].title,
                id: key,
                body: data[key].body
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
            {<FlatList
                data={notifications}
                renderItem={(props) => <NotificationCard {...props} onPress={navigation.push}/>}
                onRefresh={fetchData}
                refreshing={isLoading}
            />}
        </View>
    </>)
}