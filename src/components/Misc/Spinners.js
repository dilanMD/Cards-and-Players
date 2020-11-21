import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

import { Colors } from "../../helpers/constants/Colors";
import Cards from "../../components/Cards";

import Text from "../Text";
import { Fonts } from "../../helpers/constants/Fonts";
import Space from "./Space";

const Spinners = (props) => {
    const { color, title, message } = props;

    return (
        <Cards style={styles.container}>
            <ActivityIndicator style={styles.spinner} color={color} size="large" />
            <View style={styles.texts}>
                <Text style={styles.title}>{title}</Text>
                <Space space={5} />
                <Text style={styles.message}>{message}</Text>
            </View>
        </Cards>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        position: "absolute",
        top: "50%"
    },
    spinner: {
        flex: 0.3
    },
    texts: {
        flex: 0.7
    },
    title: {
        fontSize: Fonts.titleSize,
        fontWeight: Fonts.boldest
    }
});

export default Spinners
