import React from 'react';
import { View, Image, StyleSheet, Alert } from "react-native";

import { AppData } from "../../helpers/constants/AppData";
import { Colors } from "../../helpers/constants/Colors";
import { Fonts } from "../../helpers/constants/Fonts";
import Logo from "../../assets/icon.png";
import SocialNetworks from "./SocialNetworks";
import Cards from "../../components/Cards";
import Text from "../../components/Text";
import Buttons from "../../components/Buttons";
import Space from "../../components/Misc/Space";

const Auth = (props) => {
    const navigate = (screen) => props.navigation.navigate(screen);

    return (
        <View style={styles.container}>
            <View style={styles.topHalf}>
                <Image source={Logo} style={styles.logo} />
            </View>
            <View style={styles.bottomHalf}>
                <Cards style={styles.card}>
                    <Text style={styles.title}>Welcome to {AppData.title}</Text>
                    <Space space={10} />
                    <Text style={styles.subtitle}>{AppData.subtitle}</Text>
                    <Space space={20} />
                    <Buttons title="Login" onPress={() => navigate("Login")} />
                    <Buttons title="Register" type="outline" onPress={() => navigate("Register")} />
                    <Space space={10} />
                    <Text>──────── Or connect using ────────</Text>
                    <Space space={20} />
                    <SocialNetworks />
                </Cards>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        width: 100,
        height: 100,
        marginTop: 100
    },
    topHalf: {
        flex: 0.5,
        backgroundColor: Colors.primary,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: "center",
    },
    bottomHalf: {
        flex: 0.5,
        alignItems: "center",
    },
    card: {
        marginTop: -100
    },
    title: {
        fontSize: Fonts.titleSize,
        fontWeight: Fonts.boldest,
        textTransform: 'uppercase'
    },
});

export default Auth;