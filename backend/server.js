const express = require('express');
const dotenv = require('dotenv');
const { chats } = require('./data/data');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');
const ventRoutes = require('./routes/ventRoutes');
const contactRoute = require("./routes/contactRoute");
//const colors=require('colors')
const connectDB = require('./config/db');
const colors = require('colors');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
const app = express();
CLIENT_URL = "http://localhost:3000"
dotenv.config();
connectDB();
app.use(cors({
    origin: true
}));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    // Get or create user on Chat Engine!
    try {
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            { username: username, secret: username, first_name: username },
            { headers: { "Private-Key": "XXXX" } }
        );
        return res.status(r.status).json(r.data);
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }
});
app.use(express.json());//to accept json data from front end that mean the user of this chat app
app.get('/', (req, res) => {
    res.send("Api is running ")
})
app.use('/api/user', userRoutes)
//create chat api

app.use('/api/chat', chatRoutes)

app.use('/api/vent', ventRoutes)
app.use('/api/comment', ventRoutes)
app.use('/api/contact', contactRoute)

//error handler message 
app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server startd in port ${PORT} `.blue.bold))