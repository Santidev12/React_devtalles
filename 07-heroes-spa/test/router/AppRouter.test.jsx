/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { MemoryRouter } from "react-router-dom";
import AppRouter from "../../src/router/AppRouter";
import { MarvelPage } from "../../src/heroes/pages";

describe('Pruebas en <AppRouter />', () => {
    test('debe de mostrar el login si no esta autenticado', () => {
        
        const contextValue = {
            logged: false
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getAllByText('Login').length).toBe(2);
    });

    test('debe de mostrar el componente de Marvel si esta autenticado', () => {
        const contextValue = {
            logged: true,
            user: { name: 'Juan', id: '123'}
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue }>
                    <MarvelPage />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getAllByText('Marvel Comics').length).toBeGreaterThanOrEqual(1);
    });
});