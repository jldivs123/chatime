const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const io = require('socket.io')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const server = app.listen(8081)
const socketIo = io(server)

socketIo.on('connection', function (socket) {
  let addr = socket.handshake.address;
  socket.on('SEND_MESSAGE', (msg_data) => {
    socketIo.emit('BROADCAST_MESSAGE', msg_data)
  });
});
