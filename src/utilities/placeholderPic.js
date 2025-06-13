const placeholderPic = 'https://www.spacex.com/static/images/share.jpg'

const handlePicError = (event) => {
  event.target.src = placeholderPic
}

export { placeholderPic, handlePicError }
