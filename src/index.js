import { compose } from 'redux'

/**
 * @param {...Function} funcs The functions to compose.
 * @returns {Function}
 */
const boundCompose = (...funcs) => arg => (...args) => compose(...funcs.map(f => a => f(a, ...args)))(arg)
export const boundComposeLeft = (...funcs) => arg => (...args) => boundCompose(...funcs.reverse())(arg)(...args)

boundCompose.left = boundComposeLeft

export default boundCompose
