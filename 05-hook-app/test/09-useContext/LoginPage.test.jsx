import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('pruebas en LoginPage', () => { 


    test('debe de mostrar el component sin el user', () => { 

        render( 
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
            )
    
            const preTag = screen.getByLabelText('pre');
            expect(preTag.innerHTML).toContain( 'null' )
     })

    test('debe de retornar el user cuando haga click', () => { 

        const setUserMock = jest.fn()

        render( 
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
            )
    
            const button = screen.getByRole('button');
            fireEvent.click(button)

            expect( setUserMock ).toHaveBeenCalledWith( {"lastname": "Pulido", "name": "Santi"})

     })
 })