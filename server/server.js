import http from 'http';
import express from 'express';
import logger from 'morgan';
import cors from'cors';
import cookieParser from 'cookie-parser';
// Parse HTTP request cookies
// HTTP request logger middleware
// CORS providing a Connect/Express middleware that can be used to enable CORS with various options.

// Components
import privateRoutes from './routes/index.privateRoute';
import publicRoute from './routes/index.publicRoute';

const app = express()
    // / setup express application
const server = http.createServer(app);

app.use(logger('dev'));
// parses incoming requests with JSON payloads
app.use(express.json());
// parses incoming requests with urlencoded payloads and is based on body-parser
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());

// Router
app.use('/auth', privateRoutes);
app.use('/public', publicRoute);

const hostname = '127.127.127.127';
const port = 3001;
server.listen(port, hostname, () => { console.log(`Server running at http://${hostname}:${port}/`); });
