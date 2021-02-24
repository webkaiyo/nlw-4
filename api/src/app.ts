import express, { response } from 'express';

const app = express();
const port = 8000;

app.get('/', (req, res) => {
  return res.json({ message: 'Hello, world!' });
});

app.post('/', (req, res) => {
  return res.json({ message: 'Os dados foram salvos com sucesso.' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
