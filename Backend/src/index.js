const express = require('express');
require('dotenv').config();
const path = require('path');
var cors = require('cors');

const app = express()
const port = (process.env.PORT || '3002')
const itemsRouter = require('../routes/todoItem');

app.use(express.json());
app.use(cors());
app.use('/items', itemsRouter);
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, () => console.log(`listening on port ${port}`));