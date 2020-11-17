import React from 'react';
import { StyleSheet, View, Text } from "react-native";

const index = (props) => {
    const { children, style } = props;

    return (
        <View>
            <Text style={style}>{children}</Text>
        </View>
    );
}

export default index;
