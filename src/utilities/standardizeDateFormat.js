export const standardizeDateFormat = (date) => {
  if (!date) return 'Invalid Date'

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  const dateToTransform = new Date(date)

  if (isNaN(dateToTransform.getTime())) return 'Invalid Date'

  if (
    (typeof date === 'string' && date.includes('T')) ||
    typeof date === 'number'
  ) {
    options.hour = 'numeric'
    options.minute = '2-digit'
    options.timeZone = 'America/Mexico_City'
    options.hour12 = false
  }

  return new Intl.DateTimeFormat('en-US', options).format(dateToTransform)
}
