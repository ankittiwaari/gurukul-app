import Styles from "../utils/AppStyles";
import {RefreshControl, ScrollView} from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import React from "react";

export default function Refreshable({children, isLoading, refreshFunction}) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={[Styles.innerApp, {backgroundColor: '#fff'}]}>
                <ScrollView refreshControl={
                    <RefreshControl size="large" refreshing={isLoading} onRefresh={refreshFunction}/>
                }>
                    {children}
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}
