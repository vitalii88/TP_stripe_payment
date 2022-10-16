import * as dotenv from 'dotenv';
import express from 'express';
import * as middleware from './middleware/index.js'
import stripeController from './controllers/stripeController.js';
dotenv.config();
const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json());
app.use(express.static('./public'));

app.post('/stripe', stripeController);

app.use(middleware.notFound);
app.use(middleware.errorHandlerMiddleware);

const start = async () => {
  try {
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
