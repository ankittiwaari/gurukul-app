import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import LabelledText from '../components/LabelledText';
import Styles, { colors } from '../utils/AppStyles';
export default function () {
    return (<>
        <View style={[Styles.innerApp, profileStyles.cardWrap]}>
            <ScrollView>
                <View style={[profileStyles.firstCard]}>
                    <Image source={require("../assets/student.jpg")} style={{ width: 200, height: 200, borderRadius: 100 }} />
                    <Text style={profileStyles.cardTitle}>Student Name</Text>
                </View>
                <View style={profileStyles.textCardWrap}>
                    <View style={profileStyles.card}>
                        <Text style={profileStyles.cardTitle}>Profile</Text>
                        <LabelledText label={"Father's Name"} text={"Father Name"} />
                        <LabelledText label={"Mother's Name"} text={"Mother Name"} />
                        <LabelledText label={"Phone"} text={"9876543210"} />
                        <LabelledText label={"Date of birth"} text={"DD-MM-YYY"} />
                        <LabelledText label={"Email"} text={"user@example.com"} />
                        <LabelledText label={"Address"} text={"Address line1, City, State"} />
                        <LabelledText label={"Blood group"} text={"B+"} />
                    </View>
                    <View style={profileStyles.card}>
                        <Text style={profileStyles.cardTitle}>Address</Text>
                        <LabelledText label={""} text={"Address line 1, City, State"} />
                    </View>
                    <View style={profileStyles.card}>
                        <Text style={profileStyles.cardTitle}>Transport</Text>
                        <LabelledText label={"Mode of transport"} text={"Van | Bus"} />
                        <LabelledText label={"Route"} text={"Indira nagar, Nehru nagar"} />
                    </View>
                </View>
            </ScrollView>
        </View>
    </>)
}

const profileStyles = StyleSheet.create({
    cardWrap: {
        padding: 8
    },
    textCardWrap: {
    },
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
        color:colors.extra1
    },
    cardSubTitle: {
        fontWeight: 'bold',
    },
    cardBodyText: {
        fontSize: 16
    }
})