import '@/styles/form.css'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaSignIn } from '@/utilities/formsSchema'
import { useAuthContext } from '@/hooks/useAuthContext'
import { signInUserService } from '@/services/userServices'

const schema = schemaSignIn

const SignIn = () => {
  const { signInFunction } = useAuthContext()
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (formData) => {
    try {
      const { status, data } = await signInUserService(formData)
      if (status === 200) {
        signInFunction(data.token)
        reset()
        navigate('/')
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.log('Login failed. Please check your credentials and try again.', error.message)
      } else {
        console.log('An unexpected error occurred. Please try again.', error.message)
      }
      console.error('Error logging in:', error)
    }
  }
  return (
    <div className='border-top'>
      <main className='form-signin w-100 m-auto'>
        <div className='card mt-2 mb-3'>
          <h1 className='text-center'>Hi Guest!</h1>
          <h6 className='text-center'>Type your E-Mail and Password to Log In</h6>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-floating'>
            <input
              type='email'
              className='form-control formElementFirst'
              placeholder='E-Mail'
              id='email'
              name='email'
              {...register('email', { required: true })}
            /><label htmlFor='email'>E-Mail</label>
            <p className='text-center error-msg mb-0'>{errors.email?.message}</p>
          </div>
          <div className='form-floating'>
            <input
              type='password'
              className='form-control formElementLast'
              placeholder='Password'
              id='password'
              name='password'
              {...register('password', { required: true })}
            /><label htmlFor='password'>Password</label>
            <p className='text-center error-msg mb-0'>{errors.password?.message}</p>
          </div>
          <button
            className='btn btn-primary w-100 py-2'
            type='submit'
          >
            Log In
          </button>
          <p className='mt-3 text-center'>
            <span>Don't have an account? <Link to='/signup'>Click here</Link></span>
            <span> to Sign Up.</span>
          </p>
        </form>
      </main>
    </div>
  )
}

export default SignIn
