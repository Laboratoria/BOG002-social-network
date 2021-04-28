//Function Register
export const register = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
};

//Función Login
export const Login = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
};

//Función Register Google
export const registerGoogle = (provider) => {
    return firebase.auth().signInWithPopup(provider);
};

//Función Sing Out
export const signOut = () => {
    return firebase.auth().signOut();
}