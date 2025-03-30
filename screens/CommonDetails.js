import {View, Text, ScrollView, RefreshControl} from 'react-native'
import ProfileHeader from '../components/ProfileHeader';
import Styles from '../utils/AppStyles';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import React from "react";
import {StyleSheet} from 'react-native';

export default function ({route}) {
    return (<SafeAreaProvider>
            <ProfileHeader/>
            <SafeAreaView style={[Styles.innerApp]}>
                <ScrollView>
                    <View style={styles.contentWrap}>
                        <Text style={[Styles.headingText]}>{route.params.title || ""}</Text>
                        <Text style={[styles.textNormal]}>{route.params.body || ""}</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    contentWrap: {
        padding: 10
    },
    textNormal: {
        fontSize: 25,
    }
})