const loop = (arr, fn, busy, err, i=0) => {
  const body = (ok,er) => {
    try {const r = fn(arr[i], i, arr); r && r.then ? r.then(ok).catch(er) : ok(r)}
    catch(e) {er(e)}
  }
  const next = (ok,er) => () => loop(arr, fn, ok, er, ++i)
  const run  = (ok,er) => i < arr.length ? new Promise(body).then(next(ok,er)).catch(er) : ok()
  return busy ? run(busy,err) : new Promise(run)
}

const tests = [
  [],
  ['one', 'two'],
  ['A', 'B', 'C']
]

loop(tests, (test, idx, all) => new Promise((testNext, testFailed) => {
  console.info('Performing test ' + idx)
  return loop(test, (testCase) => {
    console.info(testCase)
  })
  .then(testNext)
  .catch(testFailed)
}))
.then(() => console.info('All tests done'))
