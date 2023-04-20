// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeInputValue = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickedSearchBtn = id => {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const updateList = suggestionsList.filter(eachItem =>
      eachItem.id === id ? eachItem.suggestion : searchInput,
    )
    const searchVal = updateList[0].suggestion
    console.log(searchVal)

    this.setState({searchInput: searchVal})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResult = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          className="google-logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="text">
          <div className="search-input-container">
            <img
              className="imgUrl"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              className="input"
              type="search"
              placeholder="Search Google"
              onChange={this.onChangeInputValue}
              value={searchInput}
            />
          </div>
          <ul>
            {searchResult.map(eachSuggestion => (
              <SuggestionItem
                suggestionsList={eachSuggestion}
                onClickedSearchBtn={this.onClickedSearchBtn}
                key={eachSuggestion.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
