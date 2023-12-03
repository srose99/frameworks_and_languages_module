const express = require('express')
const app = express()
const port = 8000

let toolsdataset = [
    {
        id: '1',
        userid: 'user1',
        keywords: ['hammer', 'screwdriver'],
        description: 'A hammer and screwdriver set',
        image: 'http://placekitten.com/100/100',
        lat: null,
        lon: null,
        date_from: ''
    },
]

app.use(express.json())

//CORS Policy
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

//Specific options for response type 204
app.options('*', (req, res) => {
    res.status(204).end()
})

//Options for the "/item" endpoint due to method not allowed errors
app.options('/item', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'POST')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    res.send()
})

//Response for api frontpage to know its loaded
app.get('/', (req, res) => {
  res.send('Welcome to my API!')
})

app.get('/items', (req, res) => {
    const {user_id, lat, lon, radius, date_from, keywords} = req.query
    let filteredItems = toolsdataset
    //Allows filtering by user id if the param is supplied in the request
    if (user_id) {
        filteredItems = filteredItems.filter((data) => data.userid === user_id)
    }
    //Allows filtering by lat & lon if supplied by the request
    if (lat && lon && radius) {
        filteredItems = filteredItems.filter((data) => {
            const distance = calculateDistance(parseFloat(lat), parseFloat(lon), parseFloat(data.lat), parseFloat(data.lon))
            return distance <= parseFloat(radius)
        })
    }
    //Date filtering logic
    if (date_from) {
        const parsedDateFrom = new Date(Date.parse(date_from))
        filteredItems = filteredItems.filter((data) => {
            return new Date(data.date_from) >= parsedDateFrom
        })
    }
    //Keyword filtering logic
    if (keywords) {
        const searchKeywords = Array.isArray(keywords) ? keywords : keywords.split(',')
        filteredItems = filteredItems.filter((data) => {
            const itemKeywords = data.keywords
            console.log('Search Keywords:', searchKeywords)
            console.log('Item Keywords:', itemKeywords)
            return searchKeywords.every((keyword) => itemKeywords.includes(keyword))
        })
    }
    //Respond with a 200 and return a JSON object of the data
    res.status(200).json(filteredItems)
})

//Specific filtering to a different endpoint for id filtering
app.get('/item/:id', (req, res) => {
    const id = req.params.id
    const item = toolsdataset.find((data) => data.id === id)
    if (item) {
        res.status(200).json(item)
    } else {
        res.status(404).json({ error: 'data not found'})
    }
})

//Post takes the string sent with the request and formats it so it can be stored locally and accessed by a get request
app.post('/item', (req, res) => {
    const {user_id, keywords, description, lat, lon, image} = req.body
    if(!user_id || !keywords || !description || !lat || !lon){
        res.status(405).json({ error: 'Invalid JSON data format'})
    } else {
        const id = generateUUID()
        const date_from = generateDateISO()
        const newItem = {
            id,
            userid: user_id,
            keywords,
            description,
            image,
            lat,
            lon,
            date_from,
        }
        toolsdataset.push(newItem)
        res.status(201).json(newItem)
    }
})

app.delete('/item/:id', (req, res) => {
    const ID = req.params.id
    const index = toolsdataset.findIndex((data) => data.id === ID)

    if (index !== -1) {
        toolsdataset.splice(index, 1)
        res.status(204).json({ message: 'data selected removed successfully'})
    } else {
        res.status(404).json({ error: 'data not found'})
    }
})

//Logic for generating unique ID's for filtering and storage purposes
function generateUUID() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

//Logic for generating a date in a specific format that the tests require
function generateDateISO() {
    const currentDate = new Date()
    const isoDate = currentDate.toISOString()
    return isoDate
}

//Logic for taking 2 coords and generating a radius, then detecting if an overlap occurs in those radius
function calculateDistance(lat1, lon1, lat2, lon2) {
    const distance = Math.sqrt(Math.pow(lat2 - lat1, 2) + Math.pow(lon2 - lon1, 2))
    return distance
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//Function to shutdown the server manually from the CLI
process.on('SIGINT', function() {
    console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" )
    process.exit(0)
  })