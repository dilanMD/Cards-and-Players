import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

import Background from "../../assets/cricket-ground.jpg";
import { Colors } from "../../helpers/constants/Colors";
import Text from "../../components/Text";
import GameTitle from "../../components/Text/GameTitle";

const Play = () => {
    return (
        <View style={styles.container}>
            <GameTitle />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
});

export default Play;