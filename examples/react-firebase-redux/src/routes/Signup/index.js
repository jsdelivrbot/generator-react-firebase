import { SIGNUP_PATH as path } from 'constants'
function loadRoute(cb) {
  return module => cb(null, module.default)
}
export default store => ({
  path,
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    console.log('loading page:')
    import(/* webpackChunkName: "Signup" */
    './components/SignupPage')
      .then(loadRoute(cb))
      .then(() => {
        console.log('page loaded')
      })
      .catch(() => console.error('error loading route'))
  }
})
