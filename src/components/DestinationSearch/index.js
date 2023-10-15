// Write your code here
import {Component} from 'react'

import DestinationItem from '.../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchinput: '',
  }
  onChange = event => {
    const {searchinput} = this.state
    this.setState({searchinput: event.target.value})
  }

  render() {
    const {searchinput} = this.state
    const {destinationList} = this.props
    const searchres = destinationList.filter(each =>
      each.name.toLowerCase().includes(searchinput.toLowerCase()),
    )

    return (
      <div classNam="hhh">
        <div className="dsc">
          <h1 className="h">Destination Search</h1>
          <div className="sic">
            <input
              type="search"
              className="si"
              placeholder="search"
              value={searchinput}
              onChange={this.onChange}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="ssi"
            />
          </div>
          <ul className="dll">
            {searchres.map(each => (
              <DestinationItem key={each.id} destinationDetails={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
