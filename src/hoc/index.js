// 代理式的高阶组件
import React,{Component} from 'react'

function removeUserProp(WrappedComponent) {
  return class WrappingComponent extends Component {
    render () {
      const {user, ...otherProps} = this.props
      return <WrappedComponent {...otherProps}/>
    }
  }
  // return function newRender(props) {
  //   const {user, ...otherProps} = props
  //   return <WrappedComponent {...otherProps}/>
  // }
}

export default removeUserProp


const addNewProps = (WrappedComponent, newProps) => {
  return class WrappingComponent extends Component {
    render() {
      return <WrappedComponent {...this.props} {...newProps}/>
    }
  }
}