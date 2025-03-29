import {View, FlatList, ActivityIndicator} from 'react-native'
import ProfileHeader from '../components/ProfileHeader';
import Styles from '../utils/AppStyles';
import {useEffect, useState} from "react";
import Api from '../utils/Api';
import NotificationCard from "../components/NotificationCard";

export default function () {
    const [isLoading, setIsLoading] = useState(true);
    const [notifications, setNotifications] = useState([]);
    useEffect(() => {
        Api.get('remarks').then((data) => {
            const keyList = Object.keys(data);
            const notificationList = keyList.map((key) => ({
                title: data[key].title,
                id: key,
                body: data[key].body
            }))
            setNotifications(notificationList);
            setIsLoading(false);
        })
    },[]);

    return (<>
        <ProfileHeader/>
        <View style={Styles.innerApp}>
            {isLoading && <ActivityIndicator/>}
            {isLoading || <FlatList data={notifications} renderItem={(props) => <NotificationCard {...props} />} />}
        </View>
    </>)
}