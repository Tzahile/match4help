import firebaseInit from "../firebaseInit.js";

export async function FirebaseSignin({ signinOption = "email" }) {
  try {
    switch (signinOption) {
      // case "Twitter": {
      //   await firebaseInit.auth.signInWith;
      //   break;
      // }
      case "Guest": {
        await firebaseInit.auth.signInAnonymously();
        break;
      }
      case "Email": {
        await firebaseInit.auth.signInWithEmailAndPassword();
        break;
      }
      // case "Facebook": {
      //   await firebaseInit.auth.signInWith;
      //   break;
      // }
      // case "Google": {
      //   await firebaseInit.auth.signInWith;
      //   break;
      // }
      case "Phone": {
        await firebaseInit.auth.signInWithPhoneNumber();
        break;
      }
    }
    return;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
