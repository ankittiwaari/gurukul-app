import {View, Text} from 'react-native'
import ProfileHeader from '../components/ProfileHeader';
import Styles from '../utils/AppStyles';
export default function(){
return (<><ProfileHeader /><View style={Styles.innerApp}><Text style={Styles.headingText}>Attendance</Text></View></>)
}