export const getYouTubeEmbedUrl = (url) => {
  if (typeof url !== 'string') return null
  const regExp = /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/
  const match = url.match(regExp)
  return match ? `https://www.youtube.com/embed/${match[1]}` : null
}
