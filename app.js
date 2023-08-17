import express from 'express';
import path from 'path';
import * as url from 'url';

const app = express();
const __fileName = url.fileURLToPath(import.meta.url);
const __dirName = url.fileURLToPath(new URL('.', import.meta.url));

app.use(express.static(path.join(__dirName, '/public')));

app.get('/', (req, res) => {
    res.redirect('/Login/login.html');
});

app.listen(3000, () => {
    console.log('Listening to 3000');
});