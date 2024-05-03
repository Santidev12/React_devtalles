import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Google } from "@mui/icons-material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { startGoogleSignIn, startLoginWithEmailAndPassword } from '../../store/auth'
import { useMemo, useState } from 'react'

const formData = {
    email: '',
    password: ''
}

export const LoginPage = () => {
  
  const { status, errorMessage } = useSelector( state => state.auth )

  const dispatch = useDispatch()
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const { email, password, onInputChange,  } = useForm(formData)

  const isAutheticating = useMemo( () => status === 'checking', [status])

  const onSubmit = (event) => {
    event.preventDefault()
    setFormSubmitted(true);
    dispatch( startLoginWithEmailAndPassword({ email, password }) )
  }

  const onGoogleSignIn = () => {
    dispatch( startGoogleSignIn() )
  }

  return (
    <>
       <AuthLayout title='Login'>
            <form 
            aria-label='submit-form'
            className="animate__animated animate__fadeIn animate__faster"
            onSubmit={ onSubmit }>
                <Grid container>
                  <Grid item xs={ 12 } sx={{ mt: 2}}>
                    <TextField 
                      label="Correo"
                      type="email"
                      placeholder="correo@google.com"
                      fullWidth
                      name='email'
                      value={ email }
                      onChange={ onInputChange }
                      error={ email === '' && formSubmitted}
                      helperText={formSubmitted && email === '' ? 'Email is required' : '' }
                    />
                  </Grid>
                  <Grid item xs={ 12 } sx={{ mt: 2}}>
                    <TextField 
                      label="Contraseña"
                      type="password"
                      placeholder="Contraseña"
                      fullWidth
                      name='password'
                      inputProps={{
                        'data-testid': 'password'
                      }}
                      value={ password }
                      onChange={ onInputChange }
                      error={ password === '' && formSubmitted}
                      helperText={formSubmitted && password === '' ? 'Password is required' : '' }
                      />
                  </Grid>

                  <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1}}>
                  <Grid
                    item
                    display={ !!errorMessage ? '' : 'none' }
                    xs={ 12 }>
                        <Alert severity='error'>{ errorMessage }</Alert>
                    </Grid>
                      <Grid item xs={ 12 } sm={ 6 }>
                          <Button 
                          disabled={isAutheticating}
                          type='submit' 
                          variant="contained" 
                          fullWidth>
                            Login
                          </Button>
                      </Grid>
                      <Grid item xs={ 12 } sm={ 6 }>
                          <Button
                            disabled={isAutheticating}
                            onClick={ onGoogleSignIn } 
                            aria-label='google-btn'
                            variant="contained" 
                            fullWidth 
                          >
                            <Google /> 
                            <Typography sx={{ ml: 1 }}>Google</Typography>
                          </Button>
                      </Grid>
                  </Grid>

                  <Grid container direction="row" justifyContent="end">
                      <Link component={ RouterLink } color='inherit' to='/auth/register'>
                      Crear una cuenta
                      </Link>
                      
                  </Grid>
                </Grid>
            </form>

       </AuthLayout>
    </>
    
  )
}
