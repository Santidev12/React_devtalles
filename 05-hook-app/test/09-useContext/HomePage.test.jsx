const { render, screen } = require("@testing-library/react")
const { HomePage } = require("../../src/09-useContext/HomePage")
const { UserContext } = require("../../src/09-useContext/context/UserContext")


describe('pruebas en el HomePage', () => { 

    const user = {
        id: 1,
        name: 'Santi'
    }

    test('debe de mostrar el commponente sin el usuario', () => {

        render( 
        <UserContext.Provider value={{ user }}>
            <HomePage />
        </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toContain( user.name )
        expect(preTag.innerHTML).toContain( user.id.toString() )

        // screen.debug()
     })
 })