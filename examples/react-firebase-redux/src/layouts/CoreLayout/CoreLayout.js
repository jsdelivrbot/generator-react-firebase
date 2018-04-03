import React from 'react'
import PropTypes from 'prop-types'
import Navbar from 'containers/Navbar'
import classes from './CoreLayout.scss'
import LoadingSpinner from 'components/LoadingSpinner'
import { Notifications } from 'modules/notification'
import 'styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className={classes.container}>
    <Navbar />
    <LoadingSpinner />
    <div className={classes.children}>{children}</div>
    <Notifications />
  </div>
)

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default CoreLayout
