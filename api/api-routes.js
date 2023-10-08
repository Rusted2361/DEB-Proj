import { Router } from "express";

const router = Router();
const greetingsList = [
    "Hello world", 
    "Bonjour", 
    "Hello wolt",
    "Hallo, wêreld!",
    "أهلاً بالعالم",
    "Salam Dünya",
    "Здравей, свят!"
]
const visitorCount = Math.floor(Math.random() * 1000)

router.get('/',(req,res) =>{
    res.send('hello world!')
})

router.get('/greetings', async (req,res) =>{
    res.json(greetingsList)
})
router.get('/visitors', async (req,res) =>{
    const visitorCount = Math.floor(Math.random() * 1000)
    res.json(visitorCount)
})
export default router;