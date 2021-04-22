export const assignName = (username) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        user.updateProfile({
          displayName: username,
        });
      }
      // console.log(user);
    });
  };