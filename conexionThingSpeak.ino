#include <WiFiClient.h>
#include <WiFi.h>

char ssid[] = "CCAI_TESE";  // type your wifi name
char pass[] = "TESE_ccai22";  // type your wifi password

#include <ThingSpeak.h>
// Clave de escritura del canal de ThingSpeak
const char* apiKey = "OC5BMU4E12L6R031";
// ID del canal de ThingSpeak
unsigned long channelID = 2163518;
WiFiClient client;

void setup() {
Serial.begin(9600);
  // put your setup code here, to run once:
  // aquí se realiza la conexión a
WiFi.begin(ssid, pass); // Inicia WiFi
ThingSpeak.begin(client);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Conectando a la red Wi-Fi...");
  }


}

void loop() {
  // put your main code here, to run repeatedly:
ThingSpeak.setField(1, 24); // Asignar el valor al campo 1 del canal
  ThingSpeak.setField(2,  1013); // Asignar el valor al campo 2 del canal
    ThingSpeak.setField(3, 2000); // Asignar el valor al campo 2 del canal
   int statusCode = ThingSpeak.writeFields(channelID, apiKey);
  
  if (statusCode == 200) {
    Serial.println("Datos enviados correctamente a ThingSpeak");
  } else {
    Serial.print("Error al enviar los datos a ThingSpeak. Código de estado: ");
    Serial.println(statusCode);
  }
  
  delay(5000);
}
