import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from "react-native";
import AwesomeAlert from 'react-native-awesome-alerts';
import { useSelector, useDispatch } from "react-redux";

import { AppData } from "../../helpers/constants/AppData";
import { Colors } from "../../helpers/constants/Colors";
import { Fonts } from "../../helpers/constants/Fonts";
import { register } from '../../redux/actions/authActions';
import Logo from "../../assets/icon.png";
import Cards from "../../components/Cards";
import Text from "../../components/Text";
import Inputs from "../../components/Inputs";
import Buttons from "../../components/Buttons";
import Space from "../../components/Misc/Space";
import Spinners from "../../components/Misc/Spinners";

const Register = () => {
    // STATES
    const [showError, setShowError] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [pwdError, setPwdError] = useState("");
    const [confirmError, setConfirmError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

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
    const handleConfirm = (text) => {
        setConfirm(text);
        setConfirmError("");
    }

    // USE EFFECT => LIFE CYCLES
    useEffect(() => {
        auth.error && setShowError(true);
    }, [auth.error]);

    const handleRegister = (mailId, pwd) => {
        if (email === "") {
            setEmailError("Please enter email address");
        } else if (password === "") {
            setPwdError("Please enter password");
        } else if (confirm === "") {
            setConfirm("Please enter confirm password");
        } else if (confirm !== password) {
            setConfirmError("Confirm password doesn't match");
        } else if (email !== "" && password !== "" && confirm !== "" && password === confirm) {
            dispatch(register(mailId, pwd));
        }
    }

    const hideAlert = () => setShowError(false);

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
                    <Inputs
                        placeholder="Confirm Password"
                        icon="lock"
                        size={Fonts.subTitleSize}
                        style={{ borderBottomColor: confirmError === "" ? Colors.primaryLight : Colors.danger }}
                        color={confirmError === "" ? Colors.primaryLight : Colors.danger}
                        secured
                        value={confirm}
                        handleChange={(text) => handleConfirm(text)}
                    />
                    {confirmError !== "" && <Text style={styles.error}>{confirmError}</Text>}
                    {auth.isLoading && (
                        <Spinners
                            color={Colors.primaryLight}
                            title="Registration"
                            message="Please wait until our registraion process finish!!"
                        />
                    )}
                    {auth.error && (
                        <AwesomeAlert
                            show={showError}
                            showProgress={false}
                            title="Registration Error"
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
                        title="Register"
                        onPress={() => handleRegister(email, password)}
                    />
                    <Space space={15} />
                    <Text>{AppData.byRegister}</Text>
                    <Text style={styles.forget}>Terms and conditions</Text>
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

export default Register;