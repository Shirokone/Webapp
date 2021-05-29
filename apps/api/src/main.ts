import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import {views} from './app/controllers/views';
import {heroes} from './app/controllers/heroes';
import { HeroRepository } from './app/repositories/hero-repository';
const heroRepo = new HeroRepository();

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../../../apps/api/src/app/views'));
app.use(bodyParser.urlencoded({ extended: true }))

heroes(app, heroRepo);
views(app, heroRepo);


const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
