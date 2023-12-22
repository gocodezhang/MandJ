import express, { Request, Response } from 'express'
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
// const morgan = require('morgan');
// const cors = require('cors');
// const path = require('path');

// initalize the app
const app = express();

// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

// catch all
app.get("/*", (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
});

//
app.listen(3000);
console.log('Listening at http://localhost:3000');