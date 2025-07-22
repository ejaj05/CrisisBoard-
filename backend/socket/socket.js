// backend/socket/socket.js
module.exports = function(io) {
  io.on('connection', (socket) => {
    console.log('✅ New user connected:', socket.id);

    // Sample event
    socket.on('test', (data) => {
      console.log('Test event received:', data);
    });

    socket.on('disconnect', () => {
      console.log('❌ User disconnected:', socket.id);
    });
  });
};
