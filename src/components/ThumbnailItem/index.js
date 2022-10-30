// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, displaySelectedImage, isActive} = props

  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const changeImage = () => {
    displaySelectedImage(id)
  }

  const selectedThumbnail = isActive ? 'active-thumbnail' : ''

  return (
    <li className="thumbnail-item">
      <button type="button" onClick={changeImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail ${selectedThumbnail}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
