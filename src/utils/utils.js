import { updateSnackbarState } from '../redux/actions/actions'
import store from '../redux/store'
import { severityValues } from '../hooks/useSnackbar'
import { getData } from './asyncKeyStorage'

const showMessage = (type, message) => {
  store.dispatch(
    updateSnackbarState({
      severity: type,
      show: true,
      message: message || 'Network error'
    })
  )
}

const showErrorMessage = (message) => {
  const tempMessage = typeof message === 'string' ? message : 'Network Error'
  showMessage(severityValues.ERROR, tempMessage)
}

const showSuccessMessage = (message) => {
  const tempMessage = typeof message === 'string' ? message : 'Success'
  showMessage(severityValues.SUCCESS, tempMessage)
}

const isLoggedIn = () => {
  // for tesstinga nd auth is no required , return by default tru
  return true
  // const token = getData('accessToken')
  // return token ? true : false
}

const showLoadingIndicator = () => {
  const loaderEl = document.getElementById('loader')
  if (loaderEl) loaderEl.style.display = 'flex'
}

const hideLoadingIndicator = () => {
  const loaderEl = document.getElementById('loader')
  if (loaderEl) loaderEl.style.display = 'none'
}

const truncateText = (str, length) => {  
  return  str?.length >= length ? str.substring(0,length) +   '...' : str;
}
export {
  showErrorMessage,
  showSuccessMessage,
  isLoggedIn,
  showLoadingIndicator,
  hideLoadingIndicator,
  truncateText
}
