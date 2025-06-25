export const standardizeDateFormat = (date) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  if (date.includes('T')) {
    options.hour = 'numeric'
    options.minute = '2-digit'
    options.timeZone = 'America/Mexico_City'
    options.hour12 = false
  }

  const dateToTransform = new Date(date)
  return new Intl.DateTimeFormat('en-US', options).format(dateToTransform)
}
