import React from 'react';
import { StyleSheet, ToastAndroid } from "react-native";
import { Button } from 'react-native-elements';

import { Colors } from "../../helpers/constants/Colors";

const index = (props) => {
    const { title, type, onPress } = props;

    const showToast = () => {
        ToastAndroid.show("A pikachu appeared nearby !", ToastAndroid.SHORT);
        console.log("Toast")
    }

    return (
        <Button
            title={title}
            type={type}
            buttonStyle={styles.buttonStyle}
            containerStyle={styles.containerStyle}
            onPress={onPress}
        />
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        borderWidth: 1
    },
    containerStyle: {
        width: "100%",
        marginBottom: 10,
    }
});

export default index;
