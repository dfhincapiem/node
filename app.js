const express = require('express');
const app = express();


//PORT DEPENDING ON ENV VARS
const port = process.env.PORT || 3000;

//CHECK IF APP IS SETUP IN PRODUCTION MODE
const isProduction = process.env.NODE_ENV === 'production';

//TURN ON CORS
const cors = require('./middleware/cors');

app.use(cors());
app.use(require('./controllers'))



app.listen(port, () => {
  console.log(`starts up at port ${port}`);
});

