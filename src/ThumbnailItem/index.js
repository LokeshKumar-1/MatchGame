import './index.css'

const ThumbnailItem = props => {
  const {item, evaluatingImage} = props
  const {id, thumbnailUrl} = item

  const imageClicked = () => {
    evaluatingImage(id)
  }

  return (
    <li className="thumbnailListItem">
      <button className="thumbnailBtn" type="button" onClick={imageClicked}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnailListImg" />
      </button>
    </li>
  )
}

export default ThumbnailItem
