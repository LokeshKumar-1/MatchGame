import './index.css'

const TabItem = props => {
  const {item, isSelected, changingTabId} = props
  const {tabId, displayText} = item
  const classNameForButton = isSelected ? 'btnAfterSelected' : 'tabButton'

  const tabIdChanged = () => {
    changingTabId(tabId)
  }

  return (
    <li>
      <button
        className={classNameForButton}
        type="button"
        onClick={tabIdChanged}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
