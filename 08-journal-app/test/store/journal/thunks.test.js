/* eslint-disable no-undef */

import { addNewEmptyNote, savingNewNote, setActiveNote, startNewNote } from "../../../src/store/journal";
import { FirebaseDB } from "../../../src/firebase/config";
import { getDocs, collection, deleteDoc } from "firebase/firestore/lite";


describe('Pruebas en Journal Thunks', () => {

    const dispatch = jest.fn();
    const getState = jest.fn()

    beforeEach( () => jest.clearAllMocks() )

    test('startNewNote debe de crear una nueva nota en blanco', async() => {
        
        const uid = 'TEST_UID'
        getState.mockReturnValue({ auth: { uid: uid }})

        await startNewNote()( dispatch, getState )

        expect( dispatch ).toHaveBeenCalledWith( savingNewNote() );
        expect( dispatch ).toHaveBeenCalledWith( addNewEmptyNote({
            body: '',
            title: '',
            date: expect.any( Number ),
            id: expect.any( String ),
            imageUrls: expect.any(Array)
        }))
        expect( dispatch ).toHaveBeenCalledWith( setActiveNote({
            body: '',
            title: '',
            date: expect.any( Number ),
            id: expect.any( String ),
            imageUrls: expect.any(Array)
        }))

        // borrar de firebase
        const collectionRef = collection(FirebaseDB, `${ uid }/journal/notes`);
        const docs = await getDocs( collectionRef )

        const deletePromises = [];
        docs.forEach( doc => deletePromises.push(deleteDoc( doc.ref )))

        await Promise.all( deletePromises )
    });
});