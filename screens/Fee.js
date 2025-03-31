import {View, FlatList} from 'react-native'
import ProfileHeader from '../components/ProfileHeader';
import Styles from '../utils/AppStyles';
import {useEffect, useState} from "react";
import Api from '../utils/Api';
import NotificationCard from "../components/NotificationCard";

export default function ({navigation}) {
    const [isLoading, setIsLoading] = useState(true);
    const [notifications, setNotifications] = useState([]);

    function fetchData() {
        Api.get('fee').then((data) => {
            const keyList = Object.keys(data);
            const monthlyData = data[keyList[0]].monthly_data;
            const monthKeys = Object.keys(monthlyData)

            const notificationList =monthKeys.map(key => {
                return {
                    title: monthlyData[key].month,
                    body: `${monthlyData[key].status} - ${monthlyData[key].amt}`,
                }
            })
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
                renderItem={(props) => <NotificationCard {...props} onPress={navigation.push} navTitle={"Fee details"}/>}
                onRefresh={fetchData}
                refreshing={isLoading}
            />}
        </View>
    </>)
}