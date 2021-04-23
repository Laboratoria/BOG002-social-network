// expect(user.providerData[0].providerId).toBe(true);
const auth = () => {
  return {
    createUserWithEmailAndPassword: (email, password) => {
      return new Promise((resolve) => {
        resolve({
          isNewUser: true,
          Email: email,
          Pasword: password,
        });
      });
    },
    signInWithEmailAndPassword: (email, password) => {
      return new Promise((resolve) => {
        resolve({
          operationType: "signIn",
          Email: email,
          Pasword: password,
        });
      });
    },
    signInWithPopup: (provider) => {
      return new Promise((resolve) => {
        resolve("signIn")
      }
      )
    },
  }
}

const firebase = {
  auth: auth,
};

export default jest.fn(() => {
  return firebase;
});
