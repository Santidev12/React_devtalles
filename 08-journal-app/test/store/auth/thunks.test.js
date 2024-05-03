/* eslint-disable no-undef */
import { loginWithEmailAndPassword, logoutFirebase, signInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, login, logout, startGoogleSignIn, startLoginWithEmailAndPassword, startLogout } from "../../../src/store/auth";
import { checkingAuthentication } from "../../../src/store/auth/thunks";
import { demoUser } from "../../fixtures/authFixtures";
import { clearNotesLogout } from "../../../src/store/journal/journalSlice";

jest.mock('../../../src/firebase/providers')

describe('Pruebas en thunks', () => {
    
    const dispatch = jest.fn();

    beforeEach( () => jest.clearAllMocks() )


    test('debe de invocar el checkingCredentials ', async() => {

       await checkingAuthentication()( dispatch );
       expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );

    });

    test('startGoogleSignIn debe de llamar checkingCredentials y login - Exito ', async() => {
        
        const loginData = { ok: true, ...demoUser }
        await signInWithGoogle.mockResolvedValue( loginData );

        await startGoogleSignIn()( dispatch );

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() )
        expect( dispatch ).toHaveBeenCalledWith( login( loginData ) )
    });

    test('startGoogleSignIn debe de llamar checkingCredentials y logout - Error', async() => {
        
        const loginData = { ok: false, errorMessage: 'un error en google' }
        await signInWithGoogle.mockResolvedValue( loginData );

        await startGoogleSignIn()( dispatch );

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() )
        expect( dispatch ).toHaveBeenCalledWith( logout( loginData.errorMessage ) )
    });
    
    test('startLoginWithEmailAndPassword debe de llamar checkingCredentials y login - Exito', async() => {
        
        const loginData = { ok: true, ...demoUser }
        const formData = { email: demoUser.email, password: '123456'}

        await loginWithEmailAndPassword.mockResolvedValue( loginData );

        await startLoginWithEmailAndPassword(formData)(dispatch)
        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( login(loginData) );
    });

    test('startLoginWithEmailAndPassword  debe de llamar checkingCredentials y login - Error', async() => {
        const loginData = { ok: false, errorMessage: 'un error en al inniciar con email and password' }
        const formData = { email: demoUser.email, password: '123456'}

        await loginWithEmailAndPassword.mockResolvedValue( loginData );

        await startLoginWithEmailAndPassword(formData)(dispatch)
        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( logout(loginData) );
    });

    test('startLogout debe de llamar logoutFirebase, clearNotes y logout', async() => {

        await startLogout()( dispatch );

        expect( logoutFirebase ).toHaveBeenCalled();
        expect( dispatch ).toHaveBeenCalledWith( clearNotesLogout() );
        expect( dispatch ).toHaveBeenCalledWith( logout() );

    });
});