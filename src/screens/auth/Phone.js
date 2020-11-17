import React from 'react';
import { View, Image, StyleSheet, Alert } from "react-native";

import { AppData } from "../../helpers/constants/AppData";
import { Colors } from "../../helpers/constants/Colors";
import { Fonts } from "../../helpers/constants/Fonts";
import Logo from "../../assets/icon.png";
import SocialNetworks from "./SocialNetworks";
import Cards from "../../components/Cards";
import Text from "../../components/Text";
import Inputs from "../../components/Inputs";
import Buttons from "../../components/Buttons";
import Space from "../../components/Misc/Space";

const Phone = (props) => {
    const navigate = (screen) => props.navigation.navigate(screen);

    return (
        <View style={styles.container}>
            <View style={styles.topHalf}>
                <Image source={Logo} style={styles.logo} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Register</Text>
                    <Space space={10} />
                    <Text style={styles.subtitle}>{AppData.subtitle}</Text>
                </View>
            </View>
            <View style={styles.bottomHalf}>
                <Cards style={styles.card}>
                    <Inputs
                        placeholder="Username"
                        icon="user"
                        size={Fonts.subTitleSize}
                        color={Colors.dark}
                    />
                    <Inputs
                        placeholder="Email"
                        icon="mail"
                        size={Fonts.subTitleSize}
                        color={Colors.dark}
                        keyboardType="email-address"
                    />
                    <Inputs
                        placeholder="Password"
                        icon="lock"
                        size={Fonts.subTitleSize}
                        color={Colors.dark}
                        secured
                    />
                    <Buttons title="Register" onPress={() => navigate("Login")} />
                    <Space space={15} />
                    <Text>{AppData.byRegister}</Text>
                    <Text style={styles.forget}>Terms and conditions</Text>
                </Cards>
                <Space space={20} />
                <Text>──────── Or connect using ────────</Text>
                <Space space={20} />
                <Cards>
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
        width: 50,
        height: 50,
        marginTop: 50
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
        marginTop: -150
    },
    titleContainer: {
        textAlign: "left",
        width: "100%",
        marginLeft: 40,
        marginTop: 50
    },
    title: {
        fontSize: Fonts.titleSize,
        fontWeight: Fonts.boldest,
        color: Colors.bright,
    },
    subtitle: {
        color: Colors.bright
    },
    forget: {
        color: Colors.primary,
        fontWeight: Fonts.boldest
    }
});

export default Phone;