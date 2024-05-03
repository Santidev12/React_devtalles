import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {

    try {
        const result = await signInWithPopup( FirebaseAuth, googleProvider )
        // const credentials = GoogleAuthProvider.credentialFromResult( result );

        const { displayName, email, photoURL, uid } = result.user
        
        return {
            ok: true,
            displayName, email, photoURL, uid
        }

    } catch (error) {
        
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}

export const registerUserWithEmailPassword = async({ email, password, displayName }) => {
    try {
        
        const result = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = result;

        await updateProfile( FirebaseAuth.currentUser, { displayName });

        return {
            ok: true,
            uid, photoURL, email, displayName
        }


    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}

export const loginWithEmailAndPassword = async({ email, password }) => {

    try {
        
        const result = await signInWithEmailAndPassword( FirebaseAuth, email, password )
        const { uid, photoURL, displayName } = result.user;

        return {
            ok: true,
            uid, photoURL, displayName
        }


    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }

}

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut()
}