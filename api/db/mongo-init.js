import db from "./db-instance";

db = db.getSiblingDB('deb');

db.greetings.insertMany([
    "Hello world", 
    "Bonjour", 
    "Hello wolt",
    "Hallo, wêreld!",
    "أهلاً بالعالم",
    "Salam Dünya",
    "Здравей, свят!"
]);