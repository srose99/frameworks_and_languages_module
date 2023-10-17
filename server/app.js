const express = require('express')
const app = express()
const port = 8000

let toolsdataset = [
    {
        id: '1',
        userid: 'user1',
        keywords: ['hammer', 'screwdriver'],
        description: 'A hammer and screwdriver set',
        lat: 1.000001,
        lon: 2.000002,
    },
]

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome to my API!')
})

app.get('/items', (req, res) => {
    res.status(200).json(toolsdataset)
})

app.get('item/:id', (req, res) => {
    const id = req.params.id
    const item = toolsdataset.find((data) => data.id === id)
    if (item) {
        res.status(200).json(item)
    } else {
        res.status(404).json({ error: 'data not found'})
    }
})

app.post('/item', (req, res) => {
    const {user_id, keywords, description, lat, lon} = req.body

    if(!user_id || !keywords || !description || !lat || !lon){
        res.status(405).json({ error: 'Invalid JSON data format'})
    } else {
        const id = generateUUID();
        const newItem = {
            id,
            userid: user_id,
            keywords,
            description,
            lat,
            lon,
        }
        toolsdataset.push(newItem)
        res.status(201).json({ id, item: newItem})
    }
})

app.delete('/item/:userid', (req, res) => {
    const userID = req.params.userid
    const index = toolsdataset.findIndex((data) => data.userid === userID)

    if (index !== -1) {
        toolsdataset.splice(index, 1)
        res.status(200).json({ message: 'data selected removed successfully'})
    } else {
        res.status(404).json({ error: 'data not found'})
    }
})

function generateUUID() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

process.on('SIGINT', function() {
    console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
    process.exit(0);
  });