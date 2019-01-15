import React from 'react'
import {connect} from 'react-redux'

import {setFilter} from '../actions'

const Link = ({active, children, onClick}) => {
  // console.log(children, 'children')
  if (active) {
    return <b className='filter selected'>{children}</b>
  } else {
    return (
      <a href="###" className="filter not-selected" onClick={(ev) => { ev.preventDefault(); onClick();}}>
        {children}
      </a>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.filter === ownProps.filter
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick() {
      dispatch(setFilter(ownProps.filter))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Link)