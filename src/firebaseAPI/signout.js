import firebaseInit from "../firebaseInit";

export async function FirebaseSignout() {
  return await firebaseInit.auth.signOut();
}
