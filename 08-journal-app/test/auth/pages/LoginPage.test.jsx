/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../../../src/store/auth";
import { MemoryRouter } from "react-router-dom";
import { notAuthenticatedState } from "../../fixtures/authFixtures";

const  mockStartGoogleSignIn = jest.fn()
const  mockStartLoginWithEmailPassword = jest.fn()

jest.mock('../../../src/store/auth/thunks.js', () => ({
    startGoogleSignIn: () => mockStartGoogleSignIn,
    startLoginWithEmailAndPassword: ({ email, password }) => {
        return () => mockStartLoginWithEmailPassword({ email, password })
    }
}))

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    preloadedState: {
        auth: notAuthenticatedState
    }
})

//  esto sirve para  que pueda hacer esto: dispatch( startLoginWithEmailAndPassword({ email, password }) )
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => (fn) => fn()
}))


describe('Pruebas en el <LoginPage />', () => {

    beforeEach( () => jest.clearAllMocks() )

    test('debe de mostrar el componente correctamente', () => {
        
        render(
            <Provider store={ store }>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        // screen.debug();
        expect( screen.getAllByText('Login').length ).toBeGreaterThanOrEqual(1);
    });

    test('boton de google debe de llamar el startGoogleSignIn', () => {
        
        render(
            <Provider store={ store }>
                <MemoryRouter>
                <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        const googleBtn = screen.getByLabelText('google-btn')
        fireEvent.click( googleBtn )

        expect( mockStartGoogleSignIn ).toHaveBeenCalled();
    });

    test('submit debe de llamar startLoginWithEmailPassword', () => {
        const email = 'fernando@google.com'
        const password = '123456'

        render(
            <Provider store={ store }>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        )

        const emailField = screen.getByRole('textbox', { name: 'Correo' })

        fireEvent.change( emailField, { target: { name: 'email', value: email }})

        const passwordfield = screen.getByTestId('password')
        fireEvent.change( passwordfield, { target: { name: 'password', value: password }})

        const loginForm = screen.getByLabelText('submit-form');
        fireEvent.submit( loginForm )

        expect( mockStartLoginWithEmailPassword ).toHaveBeenCalledWith({
            email,
            password
        })
     
    });
});