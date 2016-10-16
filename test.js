import test from 'ava'
import boundCompose from './src'

const add = (ret, ...n) => n.reduce((r, i) => (r + i), ret)
const multi = (ret, ...n) => n.reduce((r, i) => (r * i), ret)
const sub = (ret, ...n) => n.reduce((r, i) => (r - i), ret)

test('boundCompose', t => {
  const f = boundCompose(sub, multi, add)(10)
  const r = boundCompose(sub, multi, add)(10)(1,2,3,4,5)
  t.is(typeof f, 'function')
  t.is(r, 2985)
})

test('boundComposeLeft', t => {
  const f = boundCompose.left(add, multi, sub)(10)
  const r = boundCompose.left(add, multi, sub)(10)(1,2,3,4,5)
  t.is(typeof f, 'function')
  t.is(r, 2985)
})
