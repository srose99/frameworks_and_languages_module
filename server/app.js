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

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE')
    next()
})

app.options('*', (req, res) => {
    res.status(204).end()
})

app.get('/', (req, res) => {
  res.send('Welcome to my API!')
})

app.get('/items', (req, res) => {
    const {user_id, lat, lon, radius, date_from} = req.query
    let filteredItems = toolsdataset

    if (user_id) {
        filteredItems = filteredItems.filter((data) => data.userid === user_id)
    }

    if (lat && lon && radius) {
        const latRadians = (Math.PI * parseFloat(lat)) / 180
        const lonRadians = (Math.PI * parseFloat(lon)) / 180

        filteredItems = filteredItems.filter((data) => {
            const itemLatRadians = (Math.PI * data.lat) / 180
            const itemLonRadians = (Math.PI * data.lon) / 180
            const distance = calculateDistance(latRadians, lonRadians, itemLatRadians, itemLonRadians)
            return distance <= parseFloat(radius)
        })
    }

    if (date_from) {
        const providedDate = new Date(date_from)
        console.log('Converted date_from = ', providedDate)
        filteredItems = filteredItems.filter((data) => {
            const itemDate = new Date(data.date_from)
            itemDate.setMilliseconds(0)
            providedDate.setMilliseconds(0)
            console.log('item date_from = ', itemDate)
            return itemDate >= providedDate
        })
    }

    console.log('Filtered Items = ', filteredItems)

    res.status(200).json(filteredItems)
})

app.get('/item/:id', (req, res) => {
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
        const id = generateUUID()
        const date_from = generateDateISO()
        const newItem = {
            id,
            userid: user_id,
            keywords,
            description,
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

function generateUUID() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

function generateDateISO() {
    const now = new Date()
    const year = now.getUTCFullYear()
    const month = String(now.getUTCMonth() + 1).padStart(2, '0')
    const day = String(now.getUTCDate()).padStart(2, '0')
    const hours = String(now.getUTCHours()).padStart(2, '0')
    const minutes = String(now.getUTCMinutes()).padStart(2, '0')
    const seconds = String(now.getUTCSeconds()).padStart(2, '0')

    const isoDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`
    return isoDate
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const earthRadiusKm = 6371
    const dLat = (lat2 - lat1) * Math.PI / 180
    const dLon = (lon2 - lon1) * Math.PI / 180

    const lat1Rad = lat1 * Math.PI / 180
    const lat2Rad = lat2 * Math.PI / 180

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1Rad) * Math.cos(lat2Rad)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

    const distance = earthRadiusKm * c
    return distance
}


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

process.on('SIGINT', function() {
    console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" )
    process.exit(0)
  })