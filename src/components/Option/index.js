import './index.css'

const Option = props => {
  const {x} = props
  const {id, capitalDisplayText} = x

  // console.log(id)
  // console.log(Country)
  return <option value={id}>{capitalDisplayText}</option>
}

export default Option
