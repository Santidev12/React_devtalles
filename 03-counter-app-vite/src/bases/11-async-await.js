

export const getImagen = async() => {

    try {

        const apiKey = '0DXC0Ez7VLXTZxJWsv446kp7Hxhsdbvm';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        // const img = document.createElement('img');
        // img.src = url;
        // document.body.append( img );

        return url;

    } catch (error) {
        // manejo del error
        console.error(error)
        throw error;
    }
    
    
    
}

 getImagen();



