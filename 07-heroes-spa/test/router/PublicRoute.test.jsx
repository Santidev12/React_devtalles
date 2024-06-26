/* eslint-disable no-undef */
const { render, screen } = require("@testing-library/react");
const { PublicRoute } = require("../../src/router/PublicRoute");
const { AuthContext } = require("../../src/auth");
const { MemoryRouter, Route, Routes } = require("react-router-dom");

describe('Pruebas en public route', () => {
    test('debe de mostrar el children si no esta autenticado', () => {
        const contextValue = {
            logged: false
        }
        render(
        <AuthContext.Provider value={ contextValue }>
            <PublicRoute>
                <h1>Ruta publica</h1>
            </PublicRoute>
        </AuthContext.Provider>);

        expect( screen.getByText('Ruta publica')).toBeTruthy();
    });
    test('debe de navegar si esta autenticado', () => {
        const contextValue = {
            logged: true,
            user: { name: 'Strider', id: '123' }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                                <h1>Ruta publica</h1>
                            </PublicRoute>
                        } />
                        <Route path="marvel" element={<h1>Pagina Marvel</h1>}/>
                    </Routes>
                    
                </MemoryRouter>
            </AuthContext.Provider>
        );
            screen.debug();
    
            expect( screen.getByText('Pagina Marvel')).toBeTruthy();

    });
});