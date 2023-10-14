import { Router } from "express";
import db from "./db/db-instance.js";
import Greetings from "./db/greetings-model.js";
import Visitor from "./db/visitors-model.js";


const router = Router();
// const greetingsList = [
//     "Hello world", 
//     "Bonjour", 
//     "Hello wolt",
//     "Hallo, wêreld!",
//     "أهلاً بالعالم",
//     "Salam Dünya",
//     "Здравей, свят!"
// ]
const visitorCount = Math.floor(Math.random() * 1000)

router.get('/',(req,res) =>{
    res.send('hello world!')
})

router.get('/greetings', async (req,res) =>{
    const greetings = await Greetings.find({});
    const greetingsList = greetings.map(data => data.greetings);
    res.json(greetingsList)
})
router.get('/visitors', async (req,res) =>{
    const visitor = await Visitor.findOne({name: "latest"});

    if(visitor) {
        visitor.visitorcount++;
        await visitor.save();
        res.json(visitor.visitorcount)
    }
    else if (visitor == null){
        await Visitor.create({name: "latest", visitorcount: '1'});
        res.json(1)
    }
})
export default router;