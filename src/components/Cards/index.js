import React from 'react';
import { StyleSheet, View, Text } from "react-native";

import { Colors } from "../../helpers/constants/Colors";

const index = (props) => {
    const { children, style } = props;

    return (
        <View style={[style, styles.container]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        backgroundColor: Colors.bright,
        alignItems: "center",
        paddingVertical: 25,
        paddingHorizontal: 15,
        borderRadius: 10,
        elevation: 10
    },
});

export default index
