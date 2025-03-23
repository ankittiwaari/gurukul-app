import { StyleSheet, View, Image, Text } from "react-native";
import {useContext} from "react";
import { colors } from '../utils/AppStyles';
import {ProfileContext} from "../store/profile-context";
function ProfileHeader() {
    const profileContext = useContext(ProfileContext);
    return (
        <View style={styles.headerContainer}>
            <View>
                <Image source={require("../assets/student.jpg")} style={{ width: 100, height: 100, borderRadius:50}} />
            </View>
            <View style={styles.studentDetailsWrapper}>
                <Text style={styles.studentName}>{profileContext.profileData?.firstName} {profileContext.profileData?.lastName}</Text>
                <Text style={styles.studentDetails}>{profileContext.profileData?.class} - {profileContext.profileData?.section}</Text>
                <Text style={styles.studentDetails}>Academic year: {profileContext.profileData?.academic_year}</Text>
            </View>
            <View></View>
        </View>
    )
}
const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: "center",
        backgroundColor: colors.primary,
        padding:10
    },
    studentName:{
        fontSize:24,
        fontWeight:'bold',
        color:'#fff'
    },
    studentDetails:{
        fontSize:16,
        fontWeight:'bold',
        color:'#fff'
    },
    studentDetailsWrapper:{
        flex:1,
        marginLeft:10,
        justifyContent:'center'
    }


})
export default ProfileHeader;