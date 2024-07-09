import {Component} from 'react'
import './index.css'
import Option from '../Option'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {id: 'NEW_DELHI'}

  changestate = event => {
    // console.log(event.target.value)
    this.setState({id: event.target.value})
  }

  render() {
    const {id} = this.state
    // console.log(id)
    const value = countryAndCapitalsList.filter(x => x.id === id)
    const lst = value[0]
    return (
      <div className="back">
        <div className="card">
          <h1>Countries And Capitals</h1>
          <div className="cont-1">
            <select onChange={this.changestate}>
              {countryAndCapitalsList.map(x => (
                <Option key={x.id} x={x} />
              ))}
            </select>
            <p>is capital of which country?</p>
          </div>
          <p>{lst.country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
