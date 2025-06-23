import '@/styles/form.css'
import { swalSuccess, swalError, swalLoading } from '@/utilities/sweetAlerts'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaSignUp } from '@/utilities/formsSchema'
import { useNavigate } from 'react-router-dom'
import { signUpUserService } from '@/services/userServices'

const schema = schemaSignUp

const SignUp = () => {
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (formData) => {
    try {
      swalLoading()
      const { status, data } = await signUpUserService(formData)
      if (status === 201) {
        swalSuccess(data.message)
        reset()
        navigate('/signin')
      }
    } catch (error) {
      swalError('An unexpected error occurred. Please try again.', error.message)
      console.error('Error registering user:', error)
    }
  }

  return (
    <div className='border-top'>
      <main className='form-signin w-100 m-auto'>
        <div className='card mt-2 mb-3'>
          <h1 className='text-center'>Create your Account</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-floating'>
            <input
              type='text'
              className='form-control formElementFirst'
              placeholder='First Name'
              id='first_name'
              name='first_name'
              {...register('first_name', { required: true })}
            /><label htmlFor='first_name'>First Name</label>
            <p className='text-center error-msg mb-0'>{errors.first_name?.message}</p>
          </div>
          <div className='form-floating'>
            <input
              type='text'
              className='form-control formElementBetween'
              placeholder='Last Name'
              id='last_name'
              name='last_name'
              {...register('last_name', { required: true })}
            /><label htmlFor='last_name'>Last Name</label>
            <p className='text-center error-msg mb-0'>{errors.last_name?.message}</p>
          </div>
          <div className='form-floating'>
            <select
              className='form-select formElementBetween'
              id='gender'
              name='gender'
              defaultValue=''
              {...register('gender', { required: true })}
            >
              <option value='' disabled>Select your Gender</option>
              <option value='M'>Male</option>
              <option value='F'>Female</option>
            </select>
            <label htmlFor='gender'>Gender</label>
            <p className='text-center error-msg mb-0'>{errors.gender?.message}</p>
          </div>
          <div className='form-floating'>
            <input
              type='email'
              className='form-control formElementBetween'
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
            Sign Up
          </button>
        </form>
      </main>
      <h2>Why Sign Up?</h2>
      <p>Creating an account gives you access to exclusive features and content across the site. As a registered user, you can:</p>
      <ul>
        <li>Explore the live orbital positions of Starlink satellites with interactive visualization.</li>
        <li>Watch videos of SpaceX launches directly from the Launches section.</li>
        <li>View the iconic Tesla Roadster launch video in the Roadster section.</li>
      </ul>
      <p>More features may be added in the future to enhance your experience. Sign up now and explore beyond the basics.</p>
    </div>
  )
}

export default SignUp
