import * as cors from 'cors';
import * as express from 'express';
import * as hpp from 'hpp';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(hpp());
app.use(cors());

// Static resources
app.get('/', (_req, res) => res.sendFile('index.html', {root: process.cwd()}));
app.use('/dist', express.static('dist'))

// Channels
const validateChannel = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (!channels.includes(req.params.channel)) {
    return res.status(404).end();
  }
  next();
};

app.get('/channels', (_req, res) =>
  res.json(channels));

app.get('/messages/:channel',
  validateChannel,
  (req, res) => res.json(messages[req.params.channel]));

app.put('/:channel',
  validateChannel,
  (req, res) => {
    const message = req.body.payload as Message;
    messages[req.params.channel].push(message);
    res.status(201).end();
  });

// Server listen
const port = process.env.PORT || 8080;
app.listen(port, (err: any) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Listening on ${port}...`);
  }
});

// Store
const channels = [
  'general',
  'commute',
  'apis',
  'finance',
  'culture',
];

type Message = string;
type Messages = { [id: string]: Message[] };

const messages = channels.reduce((h, id) => {
  h[id] = [];
  return h;
}, {} as Messages);
