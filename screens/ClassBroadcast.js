import {View, FlatList, Text, ActivityIndicator} from 'react-native'
import ProfileHeader from '../components/ProfileHeader';
import Styles from '../utils/AppStyles';
import {useEffect, useState, useLayoutEffect} from "react";
import Api from '../utils/Api';
import NotificationCard from "../components/NotificationCard";

export default function ({navigation}) {
    useLayoutEffect(() => {
        navigation.setOptions({title: "Class broadcast"});
    }, []);
    const [isLoading, setIsLoading] = useState(true);
    const [communications, setCommunications] = useState([]);

    function fetchData() {
        Api.get('broadcast').then((data) => {
            const keyList = Object.keys(data);
            const notificationList = keyList.map((key) => ({
                title: data[key].title,
                id: key,
                body: data[key].body
            }))
            setCommunications(notificationList);
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
                data={communications}
                renderItem={(props) => <NotificationCard {...props} onPress={navigation.push}
                                                         navTitle={"Broadcast details"}/>}
                onRefresh={fetchData}
                refreshing={isLoading}
            />}
        </View>
    </>)
}