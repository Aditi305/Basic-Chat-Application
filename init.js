const mongoose = require ("mongoose");
const Chat = require ("./models/chat.js");

main() .then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "neha",
        to: "priya",
        msg: "send me your exam sheets",
        created_at: new Date()
    },
    {
        from: "rohit",
        to: "mohit",
        msg: "I need ur help",
        created_at: new Date()
    },
    {
        from: "tony",
        to: "peter",
        msg: "HEY!!",
        created_at: new Date()
    },
    {
        from: "anita",
        to: "ramesh",
        msg: "How are you?",
        created_at: new Date()
    },
    {
        from: "priti",
        to: "sunil",
        msg: "I'll be late",
        created_at: new Date()
    },
            
]

Chat.insertMany(allChats);