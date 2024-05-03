import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from '../../hooks/useForm'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUserWithEmailAndPassword } from '../../store/auth'

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [ ( value ) => value.includes('@'), 'El correo debe contener un @'],
  password: [ ( value ) => value.length >= 6, 'El password debe de tener mas de 6 letras'],
  displayName: [ ( value ) => value.length >= 1, 'El nombre es obligatorio'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage} = useSelector( state => state.auth);
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status])

  const { 
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm( formData, formValidations );


  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted(true);

    if( !isFormValid ) return

    dispatch(startCreatingUserWithEmailAndPassword(formState))
  }

  return (
    <>
    <AuthLayout title="Crear cuenta">
        <form 
        className="animate__animated animate__fadeIn animate__faster"
        onSubmit={ onSubmit }>
              <Grid container>
                <Grid item xs={ 12 } sx={{ mt: 2}}>
                  <TextField 
                    label="Nombre completo"
                    type="name"
                    placeholder="Santiago Pulido"
                    fullWidth
                    name='displayName'
                    value={ displayName }
                    onChange={ onInputChange }
                    error={ !!displayNameValid && formSubmitted }
                    helperText={ displayNameValid }
                  />
                </Grid>
                <Grid item xs={ 12 } sx={{ mt: 2}}>
                  <TextField 
                    label="Correo"
                    type="correo"
                    placeholder="correo@google.com"
                    fullWidth
                    name='email'
                    value={ email }
                    onChange={ onInputChange }
                    error={ !!emailValid && formSubmitted }
                    helperText={ emailValid }
                  />
                </Grid>
                <Grid item xs={ 12 } sx={{ mt: 2}}>
                  <TextField 
                    label="Contraseña"
                    type="password"
                    placeholder="Contraseña"
                    fullWidth
                    name='password'
                    value={ password }
                    onChange={ onInputChange }
                    error={ !!passwordValid && formSubmitted }
                    helperText={ passwordValid }
                    />
                </Grid>

                <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1}}>
                    <Grid
                    item 
                    display={ !!errorMessage ? '' : 'none' }
                    xs={ 12 }>
                        <Alert severity='error'>{ errorMessage }</Alert>
                    </Grid>
                    <Grid item xs={ 12 }>
                        <Button 
                        disabled={ isCheckingAuthentication }
                        type="submit"
                        variant="contained" 
                        fullWidth>
                          Crear cuenta
                        </Button>
                    </Grid>
                </Grid>

                <Grid container direction="row" justifyContent="end">
                  <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
                    <Link component={ RouterLink } color='inherit' to='/auth/login'>
                      Ingresar
                    </Link>
                    
                </Grid>
              </Grid>
          </form>
    </AuthLayout>
    </>
  )
}
