import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import moment from "moment";
import {sign} from "./service";

const app = express();
app.use(bodyParser.json());
app.use('/public',express.static('public'));
app.get('/', (req, res) =>{
    res.send('Hello World!');
});
app.listen(8000, () => console.log('服务已启动：http://localhost:8000/'));

