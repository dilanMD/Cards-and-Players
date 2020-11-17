import React from 'react';
import { StyleSheet, View, Text } from "react-native";

const index = (props) => {
    const { children, style } = props;

    return (
        <View>
            <Text style={[style, styles.text]}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        marginBottom: 10
    }
});

export default index;
