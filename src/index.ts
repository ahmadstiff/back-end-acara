import express from 'express';
import router from './routes/api';
import bodyParser from 'body-parser';
import connect from './utils/database';

const app = express();
app.use(bodyParser.json());
const PORT = 3000;

app.use('/api', router);

connect();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
