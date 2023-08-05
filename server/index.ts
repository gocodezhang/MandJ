const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

// initalize the app
const app = express();

// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

//



//
app.listen(3000);
console.log('Listening at http://localhost:3000');