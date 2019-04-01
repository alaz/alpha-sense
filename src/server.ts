import * as cors from 'cors';
import * as express from 'express';
import * as hpp from 'hpp';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(hpp());
app.use(cors());

app.get('/', (_req, res) => res.sendFile('index.html', {root: process.cwd()}));
app.use('/dist', express.static('dist'))

const port = process.env.PORT || 8080;
app.listen(port, (err: any) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Listening on ${port}...`);
  }
});
