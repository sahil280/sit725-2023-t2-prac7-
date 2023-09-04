let express = require('express');
let app = express();
require('./dbconnection'); 
let router = require('./routers/router'); 
let port = process.env.port || 3000;
let http = require('http').createServer(app);

const { Socket } = require('socket.io');
let io = require('socket.io')(http);

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/cat',router);

io.on('connection', (socket) => {
    console.log('a client is connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    setInterval(() => {
        socket.emit('number', parseInt(Math.random() * 10));
    }, 1000);
});

http.listen(port, ()=>{
    console.log('express server started');
});