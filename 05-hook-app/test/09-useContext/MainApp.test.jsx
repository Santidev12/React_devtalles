import { render, screen } from "@testing-library/react"
import { MainApp } from "../../src/09-useContext/MainApp"
import { MemoryRouter } from "react-router-dom"


describe('Prueba en MainApp', () => { 
    
    test('debe de mostrat el homePage', () => { 

        render( 
        <MemoryRouter initialEntries={['/login']}>
            <MainApp />
        </MemoryRouter>
         )
        
        
         expect( screen.getByText('LoginPage') ).toBeTruthy();
         // screen.debug();
     })
 })