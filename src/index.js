import express from 'express'

const app = express()

console.log('Starting server...')

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/get_doc', (req, res) => {
    let func = req.headers['x-function']
    let context = req.headers['x-context']
    console.log('Function:', func)
    console.log('Context:', context)

    // TODO: generate docstring

    res.send({"docstring": "runs another function", "more_info": false})
})

app.listen(3000)