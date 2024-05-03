import { useEffect } from "react"

export const Message = () => {

    useEffect(() => {
      
        window.addEventListener('mousemove', (event) => {
            console.log(event)
        })
    
      return () => {
      }
    }, [])
    

  return (
    <>
        <h3>Usuario ya existe</h3>
     </>
  )
}

export default Message;
