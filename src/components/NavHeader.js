import React, { PropTypes } from 'react'
import { Link } from 'react-router';

class NavHeader extends React.Component {
  render () {
    return(
    <div className="nav-header">
      <p><span className="glyphicon glyphicon-chevron-left"></span>Back</p>
      <h3>happyzero123</h3>
      <p className="glyphicon glyphicon-list"></p>
    </div>
    )
  }
}

export default NavHeader;
