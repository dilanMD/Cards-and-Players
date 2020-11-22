import React from "react";
import { View, StyleSheet } from "react-native";

import Text from "../Text";
import {Colors} from "../../helpers/constants/Colors";

const GameTitle = () => {
    return (
        <View style={styles.gamename}>
            <Text style={styles.cards}>Cards</Text>
            <Text style={styles.and}>and</Text>
            <Text style={styles.players}>Players</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    gamename: {
        marginTop: 150,
        alignItems: "center"
    },
    cards: {
        fontFamily: "Modak-Regular",
        fontSize: 50,
        color: Colors.secondary
    },
    and: {
        fontFamily: "Modak-Regular",
        fontSize: 30,
        marginTop: -30,
        color: Colors.secondaryLight
    },
    players: {
        fontFamily: "Modak-Regular",
        fontSize: 50,
        marginTop: -30,
        color: Colors.secondary
    }
});

export default GameTitle;