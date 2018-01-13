import { SIGNUP_PATH } from 'constants'
import { createGetComponent } from 'utils/router'
import { Route } from 'react-router'

export default store => ({
  path,
  /*  Async getComponent is only invoked when route matches   */
  getComponent: createGetComponent('./components/SignupPage')
})
