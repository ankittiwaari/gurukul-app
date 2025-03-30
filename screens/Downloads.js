import {View, FlatList} from 'react-native'
import ProfileHeader from '../components/ProfileHeader';
import Styles from '../utils/AppStyles';
import {useEffect, useState} from "react";
import Api from '../utils/Api';
import DownloadsCard from "../components/DownloadsCard";

export default function () {
    const [isLoading, setIsLoading] = useState(true);
    const [notifications, setNotifications] = useState([]);

    function fetchData() {
        Api.get('downloads').then((data) => {
            const keyList = Object.keys(data);
            const notificationList = keyList.map((key) => ({
                title: data[key].title,
                url: data[key].url,
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
                renderItem={(props) => <DownloadsCard {...props}/>}
                onRefresh={fetchData}
                refreshing={isLoading}
            />}
        </View>
    </>)
}