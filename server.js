/*
const WebSocket = require("ws");    // Crear un nuevo servidor WebSocket
    const wss = new WebSocket.Server({ port: 8080 });
    
    // Evento de conexión WebSocket
    wss.on('connection', (ws) => {
      console.log('Cliente conectado');
    
      // Evento de mensaje WebSocket recibido
      ws.on('message', (message) => {
        console.log('Mensaje recibido:', message);
    
        // Enviar mensaje de respuesta al cliente
        ws.send(`Respuesta: ${message}`);
      });
    
      // Evento de cierre de conexión WebSocket
      ws.on('close', () => {
        console.log('Cliente desconectado');
      });
    });
    
    */
/* 
    var WebSocketServer = require('websocket').server;
    var http = require('http');
    
    var server = http.createServer(function(request, response) {
        console.log((new Date()) + ' Received request for ' + request.url);
        response.writeHead(404);
        response.end();
    });
    server.listen(5000, function() {
        console.log((new Date()) + ' Server is listening on port 5000');
    });
    
    wsServer = new WebSocketServer({
        httpServer: server,
        // You should not use autoAcceptConnections for production
        // applications, as it defeats all standard cross-origin protection
        // facilities built into the protocol and the browser.  You should
        // *always* verify the connection's origin and decide whether or not
        // to accept it.
        autoAcceptConnections: false
    });
    
    function originIsAllowed(origin) {
      // put logic here to detect whether the specified origin is allowed.
      return true;
    }
    
    wsServer.on('request', function(request) {
        console.log(request)
        if (!originIsAllowed(request.origin)) {
          // Make sure we only accept requests from an allowed origin
          request.reject();
          console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
          return;
        }
        
        var connection = request.accept(null, request.origin)
        console.log((new Date()) + ' Connection accepted.');
    
        connection.on('message', function(message) {
            if (message.type === 'utf8') {
                console.log('Received Message: ' + message.utf8Data);
                //connection.sendUTF(message.utf8Data); this resend the reseived message, instead of it i will send a custom message. hello from nodejs
                connection.sendUTF("Hello from node.js");
            }
            else if (message.type === 'binary') {
                console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
                connection.sendBytes(message.binaryData);
            }
        });
    
    
    
        connection.on('close', function(reasonCode, description) {
            console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
        });
    });






 */

// este codigo es el websocket , el que me envia datos desde el ESP32 y aterriza a nodejs
var WebSocketServer = require('websocket').server;
var http = require('http');

//Porta que o server irá escutar
const port = 1010;

//Cria o server
var server = http.createServer();
//Server irá escutar na porta definida em 'port'
server.listen(port, () => {
    //Server está pronto
    console.log(`Server está executando na porta ${port}`);
});

//Cria o WebSocket server
wsServer = new WebSocketServer({
  httpServer: server
});

//Chamado quando um client deseja conectar
wsServer.on('request', (request) => {
  //Estado do led: false para desligado e true para ligado
  let state = false;

  //Aceita a conexão do client
  let client = request.accept(null, request.origin);

  //Chamado quando o client envia uma mensagem 
  client.on('message', (message) => {
      //Se é uma mensagem string utf8
      if (message.type === 'utf8') {
          //Mostra no console a mensagem
          //console.log(message.utf8Data);
          const data = JSON.parse(message.utf8Data);
          console.log("CONTADOR: ",data.contador,"Temperatura:",data.temperatura,"presion:",data.presion);


      }
  });
      //Cria uma função que será executada a cada 1 segundo (1000 millis) para enviar o estado do led
      let interval = setInterval(() => {
        //Envia para o client "ON" ou "OFF" dependendo do estado atual da variável state
        client.sendUTF(state? "ON" : "OFF");
        //Inverte o estado
        state = !state;
    }, 1000);//Tempo entre chamadas => 1000 millis = 1 segundo 

    //Chamado quando a conexão com o client é fechada
    client.on('close', () => {
        console.log("Conexão fechada");
        //Remove o intervalo de envio de estado
        clearInterval(interval);
    });
});
 
 



/* 
var WebSocketServer = require('websocket').server;
var http = require('http');

const port = 9011;

var server = http.createServer();
server.listen(port, () => {
  console.log(`Server está ejecutándose en el puerto ${port}`);
});

wsServer = new WebSocketServer({
  httpServer: server
});

wsServer.on('request', (request) => {
  let client = request.accept(null, request.origin);

  client.on('message', (message) => {
    if (message.type === 'utf8') {
      console.log(message.utf8Data);
    }
  });

  client.on('close', () => {
    console.log("Conexión cerrada");
  });
}); */


/*
este codigo es para probar el servidor de socket.io
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 9011 });

wss.on('connection', (ws) => {
  console.log('Cliente conectado');

  ws.on('message', (message) => {
    console.log('Mensaje recibido:', message);
  });

  ws.on('close', () => {
    console.log('Cliente desconectado');
  });
});
*/