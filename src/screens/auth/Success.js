import React from 'react';
import { View, Image, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Colors } from "../../helpers/constants/Colors";
import { Fonts } from "../../helpers/constants/Fonts";
import Logo from "../../assets/icon.png";
import Cards from "../../components/Cards";
import Text from "../../components/Text";
import Buttons from "../../components/Buttons";
import Space from "../../components/Misc/Space";

const Success = (props) => {
    const navigate = (screen) => props.navigation.navigate(screen);

    return (
        <View style={styles.container}>
            <View style={styles.topHalf}>
                <Image source={Logo} style={styles.logo} />
            </View>
            <View style={styles.bottomHalf}>
                <Cards style={styles.card}>
                    <Text style={styles.title}>Password Changed</Text>
                    <Space space={15} />
                    <Text style={styles.subtitle}>Congratulations!! You've successfully changed your password</Text>
                    <Space space={30} />
                    <Icon
                        size={150}
                        name="check-decagram"
                        color={Colors.primaryLight}
                    />
                    <Space space={30} />
                    <Buttons title="Back to Login" onPress={() => navigate("Login")} />
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
        fontSize: Fonts.extraLarge,
        fontWeight: Fonts.boldest,
        color: Colors.primaryLight
    },
    subtitle: {
        color: Colors.dark,
        textAlign: "center",
        marginHorizontal: 20
    },
    forget: {
        color: Colors.primary,
        fontWeight: Fonts.boldest
    }
});

export default Success;