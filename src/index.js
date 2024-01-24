// main JS file

import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import { deleteItem, getItemById, getItems, postItem, putItem } from './items.mjs';
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


// RESOURCE ITEM ENDPOINTS

//GET http://127.0.0.1:3000/items/<ID>

app.get('/items', getItems);

// GET http://127.0.0.1:3000/items

app.get('/items/:id', getItemById);


//Itemin lisäys
//POST http://127.0.0.1:3000/items

app.post('/items', postItem);


//Get http://127.0.0.1:3000. ei toimi koska index.html tarjotaan ensin

// PUT

app.put('/items/:id', putItem);

// DELETE

app.delete('/items/:id', deleteItem);


app.get('/', (req, res) => {
  res.send('joopajoo');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
