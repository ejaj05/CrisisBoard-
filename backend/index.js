const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const connectDB = require('./config/db');
const incidentRoutes = require('./routes/incidentRoutes');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/incidents", incidentRoutes);

// SOCKET
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
  
  socket.on("report_incident", (data) => {
    io.emit("new_incident", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));