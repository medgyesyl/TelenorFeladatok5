var http = require('http');
const weekday = ["Vasárnap","Hétfő","Kedd","Szerda","Csütörtök","Péntek","Szombat"]; //*weekday értékének megadása
const i = new Date(); 
var day = weekday[i.getUTCDay()];  //*a hét napjaiból csak a napot írja ki a weekdayben megadott napok alapján
var d = '{' + '"Dátum":' + '"'+ new Date().toLocaleString() + '"' + ',' + '"Nap":' + '"' + day + '"' + '}'; //* dátum és a korábban deklarált day értékének összevonása json formátumban
const PORT = (process.env.PORT || 3000); //Port választható legyen, ha nincs kiválasztva, akkor a 3000-esen fusson alapértelmezetten
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'}); //* json formátumban adja vissza, utf-8 unikódoklással
  res.end(d); //* d értéket írja ki
}).listen(PORT);
