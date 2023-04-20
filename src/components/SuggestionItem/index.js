// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, onClickedSearchBtn} = props
  const {suggestion, id} = suggestionsList
  const onClicked = () => {
    onClickedSearchBtn(id)
  }

  return (
    <li>
      <p>{suggestion}</p>
      <button onClick={onClicked} type="button" className="arrow-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
