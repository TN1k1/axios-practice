const express = require('express')
const path = require('path')
const fs = require('fs')
const port = 9000;

const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../frontend/index.html`))
})

app.use('/public', express.static(`${__dirname}/../frontend/public`))

app.get('/endpoint', (req, res) => {
    res.send('{"name": "Béla"}')
})

app.listen(port, () => {
    console.log(`server listening on http://127.0.0.1:${port}`)
});
