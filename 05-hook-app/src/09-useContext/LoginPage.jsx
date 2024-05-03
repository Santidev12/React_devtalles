import { useContext } from "react";
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {

 const { user, setUser } = useContext( UserContext );
    return (
      <>
      <h1>LoginPage  <small>{user?.name}</small></h1>
      <hr />

      <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>
      <button
      onClick={ () => setUser({ name: "Santi", lastname: "Pulido"})} 
      className="btn btn-primary mt-12"> Establecer Usuario </button>
      </>
    )
  }
  