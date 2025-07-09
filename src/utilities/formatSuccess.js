export const formatSuccess = (status) => {
  if (status === true) return 'Successful'
  if (status === false) return 'Unsuccessful'
  return 'Unknown Status'
}
