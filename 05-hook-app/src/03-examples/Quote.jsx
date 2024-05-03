import { useLayoutEffect, useRef, useState } from "react"


export const Quote = ({ name , species, image, status }) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0})

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ width, height })
  
  }, [name])


  return (
    <>
    <blockquote className='blockquote text-end' style={{ display: 'flex'}}>
        <div className="card">
            <img src={image} alt="" />
            <div className="card-body">
                <h2 ref={pRef} className='card-title'>{name}</h2>
                <p className='card-text' >{species}</p>
                <p>{status}</p>
            </div>
            </div>
            </blockquote>

            <code>{ JSON.stringify(boxSize) }</code>
    
    </>
  )
}

export default Quote