const express = require('express')
const cors = require('cors')
const app = express()

const httpServer = require ( "http" ).createServer(app)
const io = require ( "socket.io" )(httpServer)


app.use(cors())

app.set('view engine', 'ejs')

const port = 3000

app.get('/home', (req, res) => {
    res.render('home')
})


httpServer.listen(port, () => {
    console.log('Server started on port ' + port)

})

io.on("connection", (socket) => {
    console.log("User connected:", socket.id)

    socket.on('message', (data) => {
       socket.broadcast.emit('message', data)
    })
  })