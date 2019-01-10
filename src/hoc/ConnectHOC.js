import React, {Component} from 'react'
import PropTypes from 'prop-types'

const doNothing = () =>({})

function connect(mapStateToProps=doNothing, mapDispatchToProps=doNothing) {
  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function(WrappedComponent) {
    class HOCComponent extends Component {
      constructor(){
        super(...arguments)

        this.onChange = this.onChange.bind(this)

        this.store = {}
      }
      componentDidMount() {
        this.context.store.subscribe(this.onChange)
      }
      componentWillUnmount() {
        this.context.store.unsubscribe(this.onChange);
      }
      onChange() {
        this.setState({});
      }

      render () {
        const store = this.context.store
        const newProps = {
          ...this.props,
          ...mapStateToProps(store.getState(), this.props),
          ...mapDispatchToProps(store.dispatch, this.props)
        }
        return <WrappedComponent {...newProps} />
      }
    }
    HOCComponent.contextType = {
      store: PropTypes.object
    }

    HOCComponent.displayName = `Connect(${getDisplayName(WrappedComponent)})`

    return HOCComponent
  }
}

export default connect;

