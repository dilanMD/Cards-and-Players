import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import Text from "../../../components/Text";

const index = () => {
    return (
        <View style={styles.container}>
            <Text>Upcoming Matches</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default index;