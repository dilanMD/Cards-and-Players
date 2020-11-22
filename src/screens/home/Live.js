import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import Text from "../../components/Text";

const Live = () => {
    return (
        <View style={styles.container}>
            <Text>Live Score</Text>
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

export default Live;