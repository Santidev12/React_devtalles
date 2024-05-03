import { useEffect, useState } from "react"
import { Message } from "./Message";

const SimpleForm = () => {

   const [formState, setFormState] = useState({
        username: 'strider',
        email: 'santiago@google.com'
   });

   const { username, email } = formState;

   const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });        
   }

//    useEffect( () => {
    // console.log("useEffect called");
// }, [formState])

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />

        <input 
            type="text" 
            className='form-control' 
            placeholder='Username' 
            name='username' 
            value={ username } 
            onChange={ onInputChange }
        />

        <input 
            type="email" 
            className='form-control mt-2' 
            placeholder='santiago@google.com' 
            name='email' 
            value={ email }
            onChange={ onInputChange }
        />

            {
                (username == 'strider2') && <Message />
            }    
    </>
  )
}

export default SimpleForm