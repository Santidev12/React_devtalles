import { loginWithEmailAndPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers"
import { loadNotes } from "../../helpers"
import { clearNotesLogout, setNotes } from "../journal/journalSlice"
import { checkingCredentials, login, logout } from "./"

export const checkingAuthentication = () => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() )

    }

}

export const startGoogleSignIn = () => {
    return async ( dispatch ) => {

        dispatch( checkingCredentials() )

        const result = await signInWithGoogle();
        if( !result.ok ) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ) )
    }
}

export const startCreatingUserWithEmailAndPassword = ({ email, password, displayName }) => {
    return async(dispatch) => {
        dispatch( checkingCredentials() )

        const {ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName })
        if( !ok ) return dispatch( logout({ errorMessage } ) )

        dispatch( login( { uid, photoURL, displayName, email } ))
    }
}

export const startLoginWithEmailAndPassword = ({ email, password }) => {
    return async(dispatch) => {
        dispatch( checkingCredentials() );

        const result = await loginWithEmailAndPassword({ email, password })
        if( !result.ok ) return dispatch( logout( result ))
        
        dispatch( login( result ))
    }

}

export const startLogout = () => {
    return async( dispatch ) => {
        await logoutFirebase();
        dispatch( clearNotesLogout() )
        dispatch( logout() )
    }
}

export const startLoadingNotes = () => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;
        if( !uid ) throw new Error('El uid del usuario no existe')

        const notes = await loadNotes( uid );

        dispatch( setNotes( notes ) )
    }
}