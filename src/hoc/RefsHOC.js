import React, {Component} from 'react'

const refsHOC = (WrappedComponent) => {
  return class HOCComponent extends Component {
    constructor() {
      super(...arguments)

      this.linkRef = this.linkRef.bind(this)
    }
    linkRef(wrappedInstance) {
      this._root = wrappedInstance
    }

    render() {
      const props = {...this.props, ref: this.linkRef}
      return <WrappedComponent {...props}/>
    }
  }
}

export default refsHOC;