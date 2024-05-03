import { useCounter, useFetch } from '../Hooks/index';
import { LoadingQuote, Quote } from '../03-examples'
const Layout = () => {

    const { counter, increment } = useCounter( 1 );
    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${ counter }`)

    const { name , species, image, status } = !!data && data
    console.log({ data, isLoading, hasError });


  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />

        {
            isLoading
            ?    <LoadingQuote />
            :   <Quote name={ name } species={ species }  status={ status }/>
           

        }

        

        <button
            onClick={ () => increment( 1 )}
            disabled={ isLoading }
            className='btn btn-primary'>
            Next quote
        </button>


    
    </>

  )
}

export default Layout