import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from "react-native";
import Refreshable from "../components/Refreshable";
import {Calendar} from 'react-native-calendars';
import Api from '../utils/Api';

const App = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [absents, setAbsents] = useState([]);
    const [presence, setPresence] = useState([]);
    const [holidays, setHolidays] = useState([]);
    const [markedDates, setMarkedDates] = useState({});

    function fetchData() {
        setIsLoading(true);
        Api.get('attendance').then((response) => {
            const keys = Object.keys(response);
            setAbsents(response[keys[0]].absence);
            setPresence(response[keys[0]].presence);
            setHolidays(response[keys[0]].public_holidays);
            const marked = {};
            for (const md of response[keys[0]].absence) {
                marked[md] = {selected: true, marked: false, selectedColor: '#D90606FF'}
            }
            for (const md of response[keys[0]].presence) {
                marked[md] = {selected: true, marked: false, selectedColor: '#219107'}
            }
            for (const md of response[keys[0]].public_holidays) {
                marked[md] = {selected: true, marked: false, selectedColor: '#8f968d'}
            }
            setMarkedDates(marked);
            setIsLoading(false);
        })
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <Refreshable isLoading={isLoading} refreshFunction={fetchData}>
            <View style={styles.calendarWrap}><Calendar
                onDayPress={day => {
                    // setSelected(day.dateString);
                }}
                markedDates={markedDates}
            /></View>
            <View style={styles.container}>
                <View style={[styles.gridItem, styles.absents]}><Text
                    style={styles.text}>Absents: {absents.length}</Text></View>
                <View style={[styles.gridItem, styles.presents]}><Text
                    style={styles.text}>Presents: {presence.length}</Text></View>
                <View style={[styles.gridItem, styles.publicHolidays]}><Text style={styles.text}>Public
                    holidays: {holidays.length}</Text></View>
                <View style={[styles.gridItem, styles.percentage]}><Text
                    style={styles.text}>Percentage: {Math.round(((presence.length) * 100) / (absents.length + presence.length), 2)}%</Text></View>
            </View>
        </Refreshable>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1, // Take full screen height
        flexDirection: "row",
        flexWrap: "wrap", // Allow items to wrap
        padding: 5
    },
    gridItem: {
        flex: 1, // Take equal space
        minWidth: "40%", // Ensure two items per row
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        margin: 5
    },
    text: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    calendarWrap: {
        marginBottom: 40
    },
    absents: {
        backgroundColor: '#D90606FF',
    },
    presents: {
        backgroundColor: '#219107'
    },
    publicHolidays: {
        backgroundColor: '#8f968d',
    },
    percentage: {
        backgroundColor: '#0A2D88FF',
    }
});
export default App;