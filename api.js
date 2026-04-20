import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();
const API_URL = "https://public-api.karate.com/api/fighters";

router.get('/', async (req, res) =>{
    try{
        const response = await fetch(API_URL)
        const data = await response.json()
        res.json(data)
    }
    catch (error){
        console.error(error);
        res.status(500).json({error: 'Failed to find athletes'})
    }
})
export default router;
