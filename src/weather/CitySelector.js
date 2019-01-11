import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

// import * as Status from './status'
import {fetchWeather} from './actions'

const CITY_CODES = {
  '北京': 101010100,
  '上海': 101020100,
  '广州': 101280101,
  '深圳': 101280601
}


class CitySelector extends Component {
  constructor(){
    super(...arguments)

    this.onChange = this.onChange.bind(this)
  }
  onChange(e) {
    // console.log(e.target.value)
    this.props.fetchWeather(e.target.value)
  }
  componentDidMount() {
    const defaultCity = Object.keys(CITY_CODES)[0];
    this.props.fetchWeather(CITY_CODES[defaultCity]);
  }
  render() {
    return (
      <select name="" id="" onChange={this.onChange}>
        {
          Object.keys(CITY_CODES).map(cityName => (
            <option key={cityName} value={CITY_CODES[cityName]}>{cityName}</option>
          ))
        }
      </select>
    )
  }
}

const mapDispatchToProps = {
  fetchWeather
}

export default connect(null, mapDispatchToProps)(CitySelector)