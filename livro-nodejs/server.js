const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log('will run before any route')
    next(new Error('failed!'))
})

app.use((err, req, res, next) => {
    console.log('something goes wrong')
    res.status(500).send(err.message)
})

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})