import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Loading, KeyboardNav, KeyboardNavItem } from 'cerebro-ui'


class Preview extends Component {
  render() {
    return (
        <div>
          nothing
        </div>
    )
  }
}

Preview.propTypes = {
  query: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired
}

export default Preview
