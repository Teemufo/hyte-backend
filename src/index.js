// main JS file

import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
const hostname = '127.0.0.1';
const port = 3000;
const app = express();


// Staattinen sivusto palvelimen juureen(public kansion sisällä osoitteessa http://127.0.0.1:3000/sivu.html)
app.use(express.static('public'));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Staattinen sivusto ali url osoitteessa: http://127.0.0.1:3000/sivusto
// Tarjoiltava kansio määritellään relatiivisella polulla
app.use('/sivusto', express.static(path.join(__dirname, '../public')));

//mock data for simple ai
const items =[{id: 1, name: 'Item1'},
{id: 2, name: 'Item2'},
{id: 3, name: 'Item3'},
{id: 4, name: 'Item4'},
];


//GET http://127.0.0.1:3000/items/<ID>

app.get('/items', (req, res) => {
  res.json(items);
});

// GET http://127.0.0.1:3000/items

app.get('/items/:id', (req, res) => {
  // TODO: Palauta vain se objekti, jonka id vastaa pyydettyä. Käytä esim for looppia.
  console.log('requested item id', req.params.id);
  let item = 'tämän tilalle oikea objekti, let jos for looppi';
  res.json(item);
});


//Itemin lisäys
//POST http://127.0.0.1:3000/items

app.post('/items', (req, res) => {
  //TODO (optional): jatketaan tästä ens kerralla:li sää postattu item items taulukkoon
  res.json({message: 'item created'});
});


//Get http://127.0.0.1:3000. ei toimi koska index.html tarjotaan ensin

app.get('/', (req, res) => {
  res.send('joopajoo');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
