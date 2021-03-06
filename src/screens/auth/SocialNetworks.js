import React from 'react';
import { Alert, StyleSheet, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import { Colors } from "../../helpers/constants/Colors";

const SocialNetworks = (props) => {
    const navigate = (screen) => props.navigate(screen);

    return (
        <View style={styles.container}>
            <Icon.Button name="facebook" backgroundColor={Colors.facebook} />
            <Icon.Button name="google" backgroundColor={Colors.google} />
            <Icon.Button name="mobile" backgroundColor={Colors.mobile} onPress={() => navigate("Phone")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "45%",
        flexDirection: "row",
        justifyContent: "space-between"
    }
});

export default SocialNetworks;
