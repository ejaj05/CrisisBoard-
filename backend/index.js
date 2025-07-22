const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const connectDB = require('./config/db');
const { userRoutes } = require('./routes/user');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST'],
  },
});
require("./socket/socket")(io); // Socket.IO handlers

app.use(cors());
app.use(express.json());

// Connect DB
connectDB()

// Routes
app.use('/api/v1/user',userRoutes);


const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
