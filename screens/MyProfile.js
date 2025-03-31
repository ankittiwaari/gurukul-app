import {View, Text, ScrollView, Image, StyleSheet, Alert, ActivityIndicator} from 'react-native'
import {useEffect, useState} from "react";
import LabelledText from '../components/LabelledText';
import Styles, {colors} from '../utils/AppStyles';
import axios from 'axios';
import Refreshable from "../components/Refreshable";

export default function () {
    const [userData, setUserData] = useState({
        date_of_birth: null,
    });
    const [isLoading, setIsLoading] = useState(true);
    const [dataFetched, setDataFetched] = useState(false);

    async function fetchData() {
        try {
            const profileData = await axios.get(`${process.env.EXPO_PUBLIC_API_URL}/students.json`);
            setUserData(profileData.data[Object.keys(profileData.data)[0]]);
            setIsLoading(false);
            setDataFetched(true);
        } catch (err) {
            Alert.alert("Error fetching Profile data");
        }
    }

    useEffect(() => {
        if (dataFetched) {
            return;
        }
        fetchData();
    }, [])

    const profileScreen = (<View style={[Styles.innerApp, profileStyles.cardWrap]}>
        <View style={{marginBottom: 120}}>
            <ScrollView>
                <View style={[profileStyles.firstCard]}>
                    <Image source={require("../assets/student.jpg")}
                           style={{width: 200, height: 200, borderRadius: 100}}/>
                    <Text style={profileStyles.cardTitle}>{userData.firstName} {userData.lastName}</Text>
                </View>
                <View style={profileStyles.textCardWrap}>
                    <View style={profileStyles.card}>
                        <Text style={profileStyles.cardTitle}>Profile</Text>
                        <LabelledText label={"Father's Name"} text={userData.fathersName}/>
                        <LabelledText label={"Mother's Name"} text={userData.mothersName}/>
                        <LabelledText label={"Phone"} text={userData.phone_number}/>
                        <LabelledText label={"Date of birth"} text={userData.date_of_birth}/>
                        <LabelledText label={"Email"} text={userData.email}/>
                        <LabelledText label={"Blood group"} text={userData.blood_group}/>
                    </View>
                    <View style={profileStyles.card}>
                        <Text style={profileStyles.cardTitle}>Address</Text>
                        <LabelledText label={""} text={userData.address}/>
                    </View>
                    <View style={profileStyles.card}>
                        <Text style={profileStyles.cardTitle}>Transport</Text>
                        <LabelledText label={"Mode of transport"} text={userData.transport?.mode}/>
                        <LabelledText label={"Route"} text={userData.transport?.route}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    </View>)

    return (<>
        <Refreshable
            refreshFunction={fetchData}
            isLoading={isLoading}>
            {profileScreen}
        </Refreshable>
    </>)
}

const profileStyles = StyleSheet.create({
    cardWrap: {
        padding: 8
    },
    textCardWrap: {},
    firstCard: {
        alignItems: 'center'
    },
    card: {
        elevation: 4,
        marginTop: 32
    },
    cardTitle: {
        fontSize: 28,
        marginBottom: 10,
        color: colors.extra1
    },
    cardSubTitle: {
        fontWeight: 'bold',
    },
    cardBodyText: {
        fontSize: 16
    }
})