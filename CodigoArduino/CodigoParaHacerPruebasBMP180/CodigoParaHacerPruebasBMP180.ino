#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BMP085.h>

// aquí comienza el codigo para enviar los datos al servidor en el puerto 1010
#include <WiFi.h>
#include <ArduinoJson.h>
#include <ArduinoWebsockets.h>
char ssid[] = "Totalplay-04A6";
char password[] = "04A6DBCFCHH7muMQ";
const char* websockets_server_host = "192.168.100.172"; // IP do servidor websocket
const int websockets_server_port = 1010; // Porta de conexão do servidor
// Utilizamos o namespace de websocket para podermos utilizar a classe WebsocketsClient
using namespace websockets;
// Objeto websocket client
WebsocketsClient client;

StaticJsonDocument<300> jsonDoc;



// aquí termina el codigo para enviarlo al servidor en el puerto 1010

/*aquí comienza el codigo para solo enviar datos*/
#include <HTTPClient.h>
const char* serverUrl = "http://192.168.100.172:3001/api/insertData"; // URL del servidor Node.js



Adafruit_BMP085 bmp;

void setup() {

  Serial.begin(9600);

  if (!bmp.begin()) {
    Serial.println("No se pudo encontrar el sensor BMP180");
    while (1);
  }
  
    // Conectamos o wifi
    WiFi.begin(ssid, password);

    // Enquanto não conectar printamos um "."
    while(WiFi.status() != WL_CONNECTED)
    {
        Serial.print(".");
        delay(1000);
    }

    // Exibimos "WiFi Conectado"
    Serial.println("Connected to Wifi, Connecting to server.");
  // Tentamos conectar com o websockets server
    bool connected = client.connect(websockets_server_host, websockets_server_port, "/");

    // Se foi possível conectar
    if(connected) 
    {
        // Exibimos mensagem de sucesso
        Serial.println("Connected!");
        // Enviamos uma msg "Hello Server" para o servidor
        //client.send("Hello Server");
    }   // Se não foi possível conectar
    else 
    {
        // Exibimos mensagem de falha
        Serial.println("Not Connected!");
        return;
    }
    
    // Iniciamos o callback onde as mesagens serão recebidas
    client.onMessage([&](WebsocketsMessage message)
    {        
        // Exibimos a mensagem recebida na serial
        Serial.print("Got Message: ");
        Serial.println(message.data());
   
//        // Ligamos/Desligamos o led de acordo com o comando
//        if(message.data().equalsIgnoreCase("ON"))
//                   delay(1000);
//        else
//        if(message.data().equalsIgnoreCase("OFF"))
//                  delay(1000);
    });



  
}
int contador =0;
void loop() {

  /*aquí comienza el codigo para enviar a nodejs con exprees*/
    String data = "temperature=25&pressure=50&altitud=140&air_quality=20"; // Ejemplo de datos, puedes ajustar esto según tus necesidades
  HTTPClient http;
  http.begin(serverUrl);
  // Configurar los encabezados de la solicitud
  http.addHeader("Content-Type", "application/x-www-form-urlencoded");
   // Enviar los datos al servidor
  int httpResponseCode = http.POST(data);
  // Comprobar la respuesta del servidor
  if (httpResponseCode > 0) {
    String response = http.getString();
    Serial.println("Respuesta del servidor: " + response);
  } else {
    Serial.print("Error en la solicitud. Código de respuesta HTTP: ");
    Serial.println(httpResponseCode);
  }

  // Finalizar la solicitud
  http.end();
 
 StaticJsonDocument<300> jsonDoc;
String response;
contador++;
  float temperature = bmp.readTemperature();
  float pressure = bmp.readPressure() / 100.0; // Convertir a hPa
Serial.print("contador");
Serial.println(contador);

  Serial.print("Temperatura: ");
  Serial.print(temperature);
  Serial.println(" °C");

  Serial.print("Presión: ");
  Serial.print(pressure);
  Serial.println(" hPa");
Serial.println("");
  
jsonDoc["contador"] = contador;
jsonDoc["temperatura"] = temperature ;
jsonDoc["presion"] = pressure;

serializeJson(jsonDoc, response);
   




//  De tempo em tempo, o websockets client checa por novas mensagens recebidas
    if(client.available()) 
        client.poll();
        client.send(response);
        
    delay(300);
    // aquí empieza el codigo del sensor 


  
}
