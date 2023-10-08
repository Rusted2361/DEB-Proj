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

router.get('/',(req,res) =>{
    res.send('hello world!')
})

router.get('/greetings', async (req,res) =>{
    res.json(greetingsList)
})

export default router;