// Write your code here
import "./index.css"

const   DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails
  return (
    <li className="item">
      <img src={imgUrl} alt={name} className="img" />
      <p className="hh">{name}</p>
    </li>
  )
}

export default DestinationItem
