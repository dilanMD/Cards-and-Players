import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import AwesomeAlert from 'react-native-awesome-alerts';
import { useSelector, useDispatch } from "react-redux";

import { AppData } from "../../helpers/constants/AppData";
import { Colors } from "../../helpers/constants/Colors";
import { Fonts } from "../../helpers/constants/Fonts";
import { login } from '../../redux/actions/authActions';
import Logo from "../../assets/icon.png";
import SocialNetworks from "./SocialNetworks";
import Cards from "../../components/Cards";
import Text from "../../components/Text";
import Inputs from "../../components/Inputs";
import Buttons from "../../components/Buttons";
import Space from "../../components/Misc/Space";
import Spinners from "../../components/Misc/Spinners";

const Login = (props) => {
    const navigate = (screen) => props.navigation.navigate(screen);

    // STATES
    const [showError, setShowError] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [pwdError, setPwdError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // REDUX HOOKS
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    // HANDLE INPUTS
    const handleEmail = (text) => {
        setEmail(text);
        setEmailError("");
    }
    const handlePassword = (text) => {
        setPassword(text);
        setPwdError("");
    }

    // USE EFFECT => LIFE CYCLES
    useEffect(() => {
        auth.error && setShowError(true);
    }, [auth.error]);

    const handleLogin = (mailId, pwd) => {
        if (email === "") {
            setEmailError("Please enter email address");
        } else if (password === "") {
            setPwdError("Please enter password");
        } else if (email !== "" && password !== "") {
            dispatch(login(mailId, pwd));
        }
    }

    const hideAlert = () => setShowError(false);

    return (
        <View style={styles.container}>
            <View style={styles.topHalf}>
                <Image source={Logo} style={styles.logo} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Login</Text>
                    <Space space={10} />
                    <Text style={styles.subtitle}>{AppData.subtitle}</Text>
                </View>
            </View>
            <View style={styles.bottomHalf}>
                <Cards style={styles.card}>
                    <Inputs
                        placeholder="Email"
                        icon="mail"
                        size={Fonts.subTitleSize}
                        style={{ borderBottomColor: emailError === "" ? Colors.primaryLight : Colors.danger }}
                        color={emailError === "" ? Colors.primaryLight : Colors.danger}
                        keyboardType="email-address"
                        value={email}
                        handleChange={(text) => handleEmail(text)}
                    />
                    {emailError !== "" && <Text style={styles.error}>{emailError}</Text>}
                    <Inputs
                        placeholder="Password"
                        icon="lock"
                        size={Fonts.subTitleSize}
                        style={{ borderBottomColor: pwdError === "" ? Colors.primaryLight : Colors.danger }}
                        color={pwdError === "" ? Colors.primaryLight : Colors.danger}
                        secured
                        value={password}
                        handleChange={(text) => handlePassword(text)}
                    />
                    {pwdError !== "" && <Text style={styles.error}>{pwdError}</Text>}
                    {auth.isLoading && (
                        <Spinners
                            color={Colors.primaryLight}
                            title="Signing"
                            message="Please wait until our login process finish!!"
                        />
                    )}
                    {auth.error && (
                        <AwesomeAlert
                            show={showError}
                            showProgress={false}
                            title="Login Error"
                            message={auth.error.message}
                            closeOnTouchOutside={true}
                            closeOnHardwareBackPress={false}
                            showConfirmButton={true}
                            confirmText="OK"
                            confirmButtonColor={Colors.primaryLight}
                            onConfirmPressed={hideAlert}
                        />
                    )}
                    <Buttons
                        title="Login"
                        onPress={() => handleLogin(email, password)}
                    />
                    <Space space={15} />
                    <TouchableOpacity onPress={() => navigate("FindAccount")}>
                        <Text style={styles.forget}>Forget Password?</Text>
                    </TouchableOpacity>
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
    },
    error: {
        color: Colors.danger,
        fontSize: Fonts.size,
        fontWeight: Fonts.bolder,
    }
});

export default Login;