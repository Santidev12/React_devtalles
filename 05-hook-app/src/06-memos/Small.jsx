import { memo } from "react"


const Small = memo(({ value }) => {

    console.log(' me volvi a ibujar :(')

  return (
    <small>{ value }</small>
  )
})

export default Small