import React,{Component} from 'react'

function removeUserProp(WrappedComponent) {
  return class NewComponent extends WrappedComponent {
    render () {
      const {user, ...otherProps} = this.props
      this.props = otherProps;
      return super.render()
    }
  }
}

// React.cloneElement可以让组件重新绘制
const modifyPropHOC = (WrappedComponent) => {
  return class NewComponent extends WrappedComponent {
    render () {
      const elements = super.render
      const newStyle = {
        color: (elements && elements.type === 'div') ? 'red': 'green'
      }
      const newProps = {...this.props, style: newStyle}

      return React.cloneElement(elements, newProps, elements.props.children)
    }
  }
}



export default removeUserProp