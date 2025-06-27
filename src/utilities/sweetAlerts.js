import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const mySwal = withReactContent(Swal)

const swalSuccess = (message) => {
  return mySwal.fire({
    title: `${message}`,
    icon: 'success',
    background: '#000000',
    color: '#FFFFFF',
    customClass: {
      confirmButton: 'btn-custom'
    }
  })
}

const swalError = (message, error) => {
  return mySwal.fire({
    title: 'Oops...',
    text: `${message}`,
    footer: `${error}`,
    icon: 'error',
    background: '#000000',
    color: '#FFFFFF',
    customClass: {
      confirmButton: 'btn-custom'
    }
  })
}

const swalLoading = (message = 'Awaiting server response, please wait, it may take even a minute.') => {
  return mySwal.fire({
    title: message,
    allowOutsideClick: false,
    allowEscapeKey: false,
    background: '#000000',
    color: '#FFFFFF',
    didOpen: () => {
      Swal.showLoading()
    }
  })
}

export { swalSuccess, swalError, swalLoading }
