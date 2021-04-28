export const register = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
};
    
export const Login = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
};