import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import * as Status from './status'
import {fetchWeather} from './actions'


class Weather extends Component {
  render() {
    const {status, city, weather, temp1, temp2} = this.props
    switch(status) {
      case Status.LOADING: {
        return <div>天气信息请求中...</div>
      }
      case Status.SUCCESS: {
        return (
          <div>
            {city} {weather} 最低气温 {temp1} 最高气温 {temp2}
          </div>
        )
      }
      case Status.FAILURE: {
        return <div>天气信息装载失败</div>
      }
      default: {
        throw new Error('unexpected status ' + status);
      }
    }
  }
}

Weather.propTypes = {
  status: PropTypes.string.isRequired,
  city: PropTypes.string,
  weather: PropTypes.string,
  temp1: PropTypes.string,
  temp2: PropTypes.string
}

const mapStateToProps = (state) => {
  const weatherData = state.weather
  return {
    status: state.weather.status,
    city: weatherData.city,
    weather: weatherData.weather,
    temp1: weatherData.temp1,
    temp2: weatherData.temp2
  }
}
const mapDispatchToProps = {
  fetchWeather
}
export default connect(mapStateToProps, mapDispatchToProps)(Weather)