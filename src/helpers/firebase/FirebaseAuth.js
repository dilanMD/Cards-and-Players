import auth from '@react-native-firebase/auth';

export const firebaseRegister = async (email, password) => {
    const response = await auth().createUserWithEmailAndPassword(email, password);
    return response;
}

export const firebaseLogin = async (email, password) => {
    const response = await auth().signInWithEmailAndPassword(email, password);
    return response;
}

export const firebaseSignout = async () => {
    const response = await auth().signOut();
    return response;
}