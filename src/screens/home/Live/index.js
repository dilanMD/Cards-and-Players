import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import Cards from "../../../components/Cards";

const index = () => {
    return (
        <View style={styles.container}>
            <Cards></Cards>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default index;