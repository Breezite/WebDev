import express from 'express'
import fetch from 'node-fetch'
import path from 'path'

const app = express()
const PORT = 3000
app.use(express.static('public'))

app.get('/api/fighters', async (req, res) =>{
    try{
        const response = await fetch('https://public-api.karate.com/api/fighters?limit=20')
        const data = await response.json()

        res.json(data)
    }
    catch (error){
        res.status(500).json({error: 'Failed to find athletes'})
    }
})

app.listen(PORT, () =>{
    console.log(`Server running at http://localhost:${PORT}`)
})