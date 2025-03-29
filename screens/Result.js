import {View, FlatList, ActivityIndicator} from 'react-native'
import ProfileHeader from '../components/ProfileHeader';
import Styles from '../utils/AppStyles';
import {useEffect, useState} from "react";
import Api from '../utils/Api';
import ResultsCard from "../components/ResultsCard";

export default function () {
    const [isLoading, setIsLoading] = useState(true);
    const [notifications, setNotifications] = useState([]);
    useEffect(() => {
        Api.get('results').then((data) => {
            const keyList = Object.keys(data).sort();
            const notificationList = keyList.map((key) => ({
                ...data[key]
            }))
            setNotifications(notificationList);
            setIsLoading(false);
        })
    }, []);

    return (<>
        <ProfileHeader/>
        <View style={Styles.innerApp}>
            {isLoading && <ActivityIndicator/>}
            {isLoading || <FlatList data={notifications} renderItem={(props) => <ResultsCard {...props} />}/>}
        </View>
    </>)
}