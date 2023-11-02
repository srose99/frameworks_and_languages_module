const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()

app.use(cors())

app.use(express.static(path.join(__dirname, 'client')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client.html'))
})

const PORT = 8001


app.listen(PORT, () => {
    console.log(`Server is running on port 8001`)
})

process.on('SIGINT', function() {
    console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" )
    process.exit(0)
  })