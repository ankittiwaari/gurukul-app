import { View, Text, StyleSheet } from 'react-native';
import {colors} from '../utils/AppStyles';
export default function LabelledText({ label, text }) {
    return (
        <View style={textStyles.contentWrap}>
            <View><Text style={textStyles.lebel}>{label}</Text></View>
            <View><Text style={textStyles.contentStyles}>{text}</Text></View>
        </View>
    )
}
const textStyles = StyleSheet.create({
    lebel:{
        color:colors.primary
    },
    contentStyles:{
        color:colors.extra1,
        fontSize:18    
    },
    contentWrap:{
        padding:8,
        marginVertical:4,
        elevation:4,
        shadowOpacity:0.1,
        shadowRadius:1,
        backgroundColor:colors.tertiary
    }
})