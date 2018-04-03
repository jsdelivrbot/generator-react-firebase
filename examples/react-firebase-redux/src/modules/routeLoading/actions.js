import {
  START_ROUTE_LOADING,
  COMPLETE_ROUTE_LOADING,
  ERROR_ROUTE_LOADING
} from './actionTypes'

/**
 * @description Show route loading spinner
 * @param {String} path - Path of route to for which to show loading
 */
export const showRouteLoading = path => {
  return dispatch => {
    dispatch({ type: START_ROUTE_LOADING, payload: { path } })
  }
}

/**
 * @description Hide route loading spinner
 * @param {String} path - Path of route to for which to hide loading
 */
export const hideRouteLoading = path => {
  return dispatch => {
    dispatch({ type: COMPLETE_ROUTE_LOADING, payload: { path } })
  }
}

/**
 * @description Hide route loading spinner
 * @param {String} path - Path of route to for which to show loading error
 */
export const showErrorLoadingRoute = path => {
  return dispatch => {
    dispatch({ type: ERROR_ROUTE_LOADING, payload: { path } })
  }
}
