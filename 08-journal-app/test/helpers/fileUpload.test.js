import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
    cloud_name: 'dxvrlw9o6',
    api_key: '554979461719968',
    api_secret: 'LzYLXM2z4rfc4DY2kZSf7C09Seo',
    secure: true
})

/* eslint-disable no-undef */
describe('Pruebas en fileUpload', () => {
    test('debe de subir el archivo correctamente a cloudinary ', async() => {
        
        const imageUrl = 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        const resp = await fetch( imageUrl );
        const blob = await resp.blob();

        const file = new File([blob], 'foto.jpg')

        const url = await fileUpload(file)
        expect( typeof url ).toBe('string');

        const segments =  url.split('/');
        const imageId = segments[segments.length - 1].replace('.jpg', '');

        await cloudinary.api.delete_resources([ 'journal/' + imageId ], {
            resource_type: 'image'
        })
    });

    test('debe de retornar null', async() => {

        const file = new File([], 'foto.jpg')
        const url = await fileUpload(file)
        expect( url ).toBe( null );
    });
});