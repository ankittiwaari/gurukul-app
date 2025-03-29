import {MaterialIcons} from "@expo/vector-icons";
import {Pressable} from "react-native";
import React from "react";

export default function ReloadButton({onPress}) {
    return (<Pressable onPress={onPress}>
        <MaterialIcons name="refresh" size={36} color={"#fff"}/>
    </Pressable>)
}
