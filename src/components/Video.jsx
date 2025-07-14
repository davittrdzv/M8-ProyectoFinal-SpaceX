import { getYouTubeEmbedUrl } from '@/utilities/getYouTubeEmbedUrl'

const Video = ({ video, title }) => {
  return (
    <div className='ratio ratio-16x9 my-4'>
      <iframe
        src={getYouTubeEmbedUrl(video)}
        title={title}
        allowFullScreen
      />
    </div>
  )
}

export default Video
